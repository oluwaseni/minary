import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="f">
      <div class="wrap f-top">

        <!-- Brand -->
        <div class="f-brand">
          <img src="assets/logo.png" alt="Minary & Co." class="f-logo" />
          <p class="f-tagline">{{ config.business.sub }}</p>
          <div class="f-socials">
            <a [href]="config.business.instagram" target="_blank" class="f-social">Instagram</a>
            <a [href]="config.business.facebook" target="_blank" class="f-social">Facebook</a>
            <a [href]="config.business.twitter" target="_blank" class="f-social">Twitter</a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="f-col">
          <h4 class="f-col-title">Quick Links</h4>
          <a href="#home" class="f-link">Home</a>
          <a href="#services" class="f-link">Services</a>
          <a href="#packages" class="f-link">Packages</a>
          <a href="#testimonials" class="f-link">Testimonials</a>
          <a href="#contact" class="f-link">Contact</a>
        </div>

        <!-- Services -->
        <div class="f-col">
          <h4 class="f-col-title">Services</h4>
          <span class="f-link" *ngFor="let s of config.services">{{ s.title }}</span>
        </div>

        <!-- Contact -->
        <div class="f-col">
          <h4 class="f-col-title">Contact Us</h4>
          <a [href]="'tel:' + config.business.phone" class="f-link">{{ config.business.phone }}</a>
          <a [href]="'mailto:' + config.business.email" class="f-link">{{ config.business.email }}</a>
          <span class="f-link">{{ config.business.address }}</span>
          <a [href]="'https://wa.me/' + config.business.whatsapp" target="_blank" class="f-whatsapp">
            WhatsApp Us →
          </a>
        </div>

      </div>

      <div class="f-bottom">
        <div class="wrap f-bottom-inner">
          <span class="f-copy">© {{ year }} {{ config.business.name }}. All rights reserved.</span>
          <span class="f-copy">Built for Nigerian Businesses</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .f { background: #0d0d0d; color: rgba(255,255,255,0.6); font-size: 0.88rem; }
    .f-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; padding: 4rem 2rem 3rem; max-width: 1100px; margin: 0 auto; }
    @media (max-width: 768px) { .f-top { grid-template-columns: 1fr 1fr; gap: 2rem; padding: 3rem 1.25rem 2rem; } }
    @media (max-width: 480px) { .f-top { grid-template-columns: 1fr; } }
    .f-logo { height: 60px; width: auto; display: block; margin-bottom: 0.75rem; filter: brightness(0) invert(1); }
    .f-tagline { line-height: 1.65; max-width: 260px; margin-bottom: 1.5rem; font-size: 0.83rem; }
    .f-socials { display: flex; gap: 1.25rem; }
    .f-social { color: rgba(255,255,255,0.35); font-size: 0.8rem; transition: color 0.2s; text-decoration: none; }
    .f-social:hover { color: var(--accent); }
    .f-col { display: flex; flex-direction: column; gap: 0.65rem; }
    .f-col-title { color: white; font-weight: 700; font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.5rem; }
    .f-link { color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; cursor: pointer; }
    .f-link:hover { color: var(--accent); }
    .f-whatsapp { display: inline-flex; align-items: center; margin-top: 0.5rem; background: var(--accent); color: white; padding: 0.5rem 1rem; border-radius: 4px; font-weight: 700; font-size: 0.8rem; text-decoration: none; transition: opacity 0.2s; width: fit-content; }
    .f-whatsapp:hover { opacity: 0.85; }
    .f-bottom { border-top: 1px solid rgba(255,255,255,0.07); }
    .f-bottom-inner { max-width: 1100px; margin: 0 auto; padding: 1.25rem 2rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }
    .f-copy { color: rgba(255,255,255,0.2); font-size: 0.75rem; }
  `],
})
export class FooterComponent {
  config = SITE_CONFIG;
  year = new Date().getFullYear();
}
