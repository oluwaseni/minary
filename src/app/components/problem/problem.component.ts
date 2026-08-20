import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';
import { IconComponent } from '../icon/icon.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule, IconComponent, ScrollRevealDirective],
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent {
  config = SITE_CONFIG;

  getWhatsAppUrl() {
    return `https://wa.me/${this.config.business.whatsapp}`;
  }
}
