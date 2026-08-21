import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Fades + slides an element in the first time it scrolls into view.
 * Usage: <div appReveal [appRevealDelay]="i * 80">...</div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() appRevealDelay = 0; // ms, useful for staggering *ngFor lists

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit() {
    const host = this.el.nativeElement;
    this.renderer.addClass(host, 'reveal');
    if (this.appRevealDelay) {
      this.renderer.setStyle(host, 'transition-delay', `${this.appRevealDelay}ms`);
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(host, 'reveal--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(host, 'reveal--visible');
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    this.observer.observe(host);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
