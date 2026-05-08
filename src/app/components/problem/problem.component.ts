import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent {
  config = SITE_CONFIG;

  getWhatsAppUrl() {
    return `https://wa.me/${this.config.business.whatsapp}`;
  }
}
