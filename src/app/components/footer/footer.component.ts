import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="wrap footer__inner">
        <span class="footer__logo">{{ config.business.name }}</span>
        <span class="footer__copy">© {{ year }} All rights reserved</span>
        <div class="footer__socials">
          <a [href]="config.business.instagram" target="_blank" class="footer__social">Instagram</a>
          <a [href]="config.business.facebook" target="_blank" class="footer__social">Facebook</a>
          <a [href]="config.business.twitter" target="_blank" class="footer__social">Twitter</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #111;
      padding: 2.5rem;
      &__inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
      &__logo { color: white; font-weight: 900; font-size: 1.15rem; font-family: var(--font-serif); }
      &__copy { color: rgba(255,255,255,0.3); font-size: 0.78rem; }
      &__socials { display: flex; gap: 1.5rem; }
      &__social { color: rgba(255,255,255,0.35); font-size: 0.8rem; text-decoration: none; transition: color 0.2s; }
      &__social:hover { color: var(--accent); }
    }
  `],
})
export class FooterComponent {
  config = SITE_CONFIG;
  year = new Date().getFullYear();
}
