import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IconName =
  | 'globe'
  | 'smartphone'
  | 'megaphone'
  | 'bar-chart'
  | 'edit'
  | 'mail'
  | 'landmark'
  | 'clock'
  | 'layout'
  | 'target'
  | 'trending-down';

// Minimal set of hand-picked, hand-drawn line icons (24x24, stroke-based).
// Kept inline so the component has zero external icon-library dependency.
@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon"
      [ngSwitch]="name"
    >
      <!-- Website -->
      <g *ngSwitchCase="'globe'">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9Z" />
      </g>

      <!-- Social media -->
      <g *ngSwitchCase="'smartphone'">
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
        <path d="M10.5 18.5h3" />
      </g>

      <!-- Paid ads -->
      <g *ngSwitchCase="'megaphone'">
        <path d="M3 10v4a1.5 1.5 0 0 0 1.5 1.5H6l4 4.5v-15L6 8.5H4.5A1.5 1.5 0 0 0 3 10Z" />
        <path d="M11 6.5 20 3v18l-9-3.5" />
        <path d="M6 15.5 7 20" />
      </g>

      <!-- Monthly reports -->
      <g *ngSwitchCase="'bar-chart'">
        <path d="M4 20V10" />
        <path d="M12 20V4" />
        <path d="M20 20v-7" />
        <path d="M2.5 20h19" />
      </g>

      <!-- Content strategy -->
      <g *ngSwitchCase="'edit'">
        <path d="M4 20h4l10.5-10.5a2 2 0 0 0 0-2.83l-1.17-1.17a2 2 0 0 0-2.83 0L4 16v4Z" />
        <path d="M13.5 6.5l3 3" />
      </g>

      <!-- Email marketing -->
      <g *ngSwitchCase="'mail'">
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="M3 6.5 12 13l9-6.5" />
      </g>

      <!-- CAC registration -->
      <g *ngSwitchCase="'landmark'">
        <path d="M3 21h18" />
        <path d="M4.5 21V10.5" />
        <path d="M19.5 21V10.5" />
        <path d="M2.5 10.5 12 4l9.5 6.5Z" />
        <path d="M9 21v-6" />
        <path d="M15 21v-6" />
      </g>

      <!-- No time to post -->
      <g *ngSwitchCase="'clock'">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5.5l3.5 2" />
      </g>

      <!-- Unprofessional website -->
      <g *ngSwitchCase="'layout'">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9.5h18" />
        <path d="M8.5 9.5V20" />
      </g>

      <!-- Don't know how to run ads -->
      <g *ngSwitchCase="'target'">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.75" fill="currentColor" />
      </g>

      <!-- Competitors growing faster -->
      <g *ngSwitchCase="'trending-down'">
        <path d="M3 6l7 7 4-4 7 7" />
        <path d="M21 10.5V16h-5.5" />
      </g>
    </svg>
  `,
  styles: [`
    .icon { display: block; }
  `],
})
export class IconComponent {
  @Input() name!: IconName;
  @Input() size = 24;
}
