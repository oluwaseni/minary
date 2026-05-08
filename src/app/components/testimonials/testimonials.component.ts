import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="t-section section">
      <div class="wrap">
        <div class="t-header">
          <h2 class="h2 t-headline">Authentic <em>Reviews</em> from<br>Our Valued Clients</h2>
          <p class="t-sub">Find out why Nigerian businesses trust us for their growth. Their stories reflect the real-world impact of our work.</p>
        </div>
        <div class="t-grid">
          <div class="t-card" *ngFor="let t of config.testimonials">
            <div class="t-quote">&#x201C;</div>
            <p class="t-text">{{ t.text }}</p>
            <div class="t-author">
              <div class="t-author-info">
                <div class="t-name">{{ t.name }}</div>
                <div class="t-role">{{ t.role }}</div>
              </div>
              <div class="t-avatar">{{ t.initials }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .t-section { background: #f8f9fb; }
    .t-header { text-align: center; margin-bottom: 3.5rem; }
    .t-headline { color: #1a1a2e; margin-bottom: 1rem; }
    .t-headline em { font-style: normal; font-weight: 900; color: var(--accent); }
    .t-sub { color: #6b7280; font-size: 0.97rem; max-width: 480px; margin: 0 auto; line-height: 1.7; }
    .t-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
    .t-card { background: #ffffff; border-radius: 16px; padding: 2rem 1.75rem 1.75rem; display: flex; flex-direction: column; box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.05); }
    .t-quote { color: var(--accent); font-size: 3.5rem; line-height: 1; font-family: Georgia, serif; margin-bottom: 1.25rem; }
    .t-text { color: #374151; font-size: 0.95rem; line-height: 1.75; flex: 1; margin-bottom: 1.75rem; }
    .t-author { display: flex; align-items: center; justify-content: space-between; padding-top: 1.25rem; border-top: 1px solid #f0f0f0; }
    .t-author-info { display: flex; flex-direction: column; gap: 2px; }
    .t-name { font-weight: 700; color: #111827; font-size: 0.95rem; }
    .t-role { color: #9ca3af; font-size: 0.8rem; }
    .t-avatar { width: 48px; height: 48px; border-radius: 50%; background: var(--accent); color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.82rem; flex-shrink: 0; }
  `],
})
export class TestimonialsComponent {
  config = SITE_CONFIG;
}
