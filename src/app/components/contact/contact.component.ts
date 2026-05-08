import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  config = SITE_CONFIG;

  form = {
    name: '',
    business: '',
    phone: '',
    email: '',
    pkg: '',
    message: '',
  };

  sendViaWhatsApp() {
    const msg = [
      'Hi! I am interested in your services.',
      '',
      `Name: ${this.form.name}`,
      `Business: ${this.form.business}`,
      `Phone: ${this.form.phone}`,
      `Email: ${this.form.email}`,
      `Package: ${this.form.pkg}`,
      `Message: ${this.form.message}`,
    ].join('%0A');

    window.open(`https://wa.me/${this.config.business.whatsapp}?text=${msg}`, '_blank');
  }
}
