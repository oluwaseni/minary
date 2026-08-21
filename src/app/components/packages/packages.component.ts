import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent {
  config = SITE_CONFIG;

  getWhatsAppUrl() {
    return `https://wa.me/${this.config.business.whatsapp}`;
  }
}
