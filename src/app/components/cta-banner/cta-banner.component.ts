import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  template: `
    <section class="cta">
      <div class="cta__blob cta__blob--tr"></div>
      <div class="cta__blob cta__blob--bl"></div>
      <div class="wrap cta__inner">
        <h2 class="h2 cta__headline">Ready to Grow Your Business Online?</h2>
        <p class="cta__sub">Join 100+ Nigerian businesses already growing with us. Your free website is waiting.</p>
        <a [href]="getWhatsAppUrl()" target="_blank" class="cta__btn">
          Chat Us on WhatsApp →
        </a>
      </div>
    </section>
  `,
  styles: [`
    .cta {
      background: var(--accent);
      padding: 5rem 2rem;
      position: relative;
      overflow: hidden;
      text-align: center;
      &__blob { position: absolute; border-radius: 50%; pointer-events: none; }
      &__blob--tr { top: -60px; right: -60px; width: 300px; height: 300px; background: rgba(255,255,255,0.08); }
      &__blob--bl { bottom: -40px; left: 10%; width: 200px; height: 200px; background: rgba(0,0,0,0.08); }
      &__inner { position: relative; }
      &__headline { color: white; margin-bottom: 1rem; }
      &__sub { color: rgba(255,255,255,0.85); font-size: 1.1rem; max-width: 500px; margin: 0 auto 2.5rem; }
      &__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: white; color: var(--accent); padding: 1rem 2.5rem; border-radius: 6px; font-weight: 800; font-size: 1rem; transition: opacity 0.2s; }
      &__btn:hover { opacity: 0.9; }
    }
  `],
})
export class CtaBannerComponent {
  config = SITE_CONFIG;
  getWhatsAppUrl() { return `https://wa.me/${this.config.business.whatsapp}`; }
}
