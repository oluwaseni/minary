import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';
import { IconComponent } from '../icon/icon.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, IconComponent, ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  config = SITE_CONFIG;
}
