import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  config = SITE_CONFIG;
  visible = signal(false);
  currentIndex = signal(0);
  prevIndex = signal(-1);
  animating = false;

  readonly images = [
    'assets/hero-photo.png',
    'assets/hero-photo-2.png',
  ];

  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    setTimeout(() => this.visible.set(true), 80);
    this.intervalId = setInterval(() => this.advance(), 15000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  advance() {
    if (this.animating) return;
    this.animating = true;
    this.prevIndex.set(this.currentIndex());
    this.currentIndex.set((this.currentIndex() + 1) % this.images.length);
    setTimeout(() => {
      this.prevIndex.set(-1);
      this.animating = false;
    }, 700);
  }

  getWhatsAppUrl() {
    return `https://wa.me/${this.config.business.whatsapp}`;
  }
}
