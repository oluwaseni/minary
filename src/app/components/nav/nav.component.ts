import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  config = SITE_CONFIG;
  scrolled = signal(false);
  menuOpen = signal(false);

  links = ['Services', 'How It Works', 'Packages', 'Testimonials', 'Contact'];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  getWhatsAppUrl() {
    return `https://wa.me/${this.config.business.whatsapp}`;
  }

  getAnchor(link: string) {
    return '#' + link.toLowerCase().replace(/\s/g, '-');
  }
}
