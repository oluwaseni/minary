import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ServicesComponent } from './components/services/services.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PackagesComponent } from './components/packages/packages.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    ProblemComponent,
    ServicesComponent,
    HowItWorksComponent,
    PackagesComponent,
    TestimonialsComponent,
    CtaBannerComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-nav></app-nav>
    <app-hero></app-hero>
    <app-problem></app-problem>
    <app-services></app-services>
    <app-how-it-works></app-how-it-works>
    <app-packages></app-packages>
    <app-testimonials></app-testimonials>
    <app-cta-banner></app-cta-banner>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
