import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Counts a stat value up from 0 the first time it scrolls into view.
 * Handles values with a numeric lead and any suffix, e.g. "100+", "98%", "8 Days", "3x".
 * Usage: <span [appCountUp]="stat.val"></span>
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input('appCountUp') target = '';
  @Input() appCountUpDuration = 1400; // ms

  private observer?: IntersectionObserver;
  private frameId?: number;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit() {
    const host = this.el.nativeElement;
    const match = this.target.match(/^(\d+(?:\.\d+)?)(.*)$/);

    if (!match) {
      this.renderer.setProperty(host, 'textContent', this.target);
      return;
    }

    const end = parseFloat(match[1]);
    const decimals = (match[1].split('.')[1] || '').length;
    const suffix = match[2];
    const reduceMotion = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.renderer.setProperty(host, 'textContent', `0${suffix}`);

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      this.renderer.setProperty(host, 'textContent', this.target);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animate(host, end, decimals, suffix);
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(host);
  }

  private animate(host: HTMLElement, end: number, decimals: number, suffix: string) {
    const start = performance.now();
    const duration = this.appCountUpDuration;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = end * eased;
      this.renderer.setProperty(host, 'textContent', `${current.toFixed(decimals)}${suffix}`);
      if (progress < 1) {
        this.frameId = requestAnimationFrame(step);
      }
    };
    this.frameId = requestAnimationFrame(step);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.frameId) cancelAnimationFrame(this.frameId);
  }
}
