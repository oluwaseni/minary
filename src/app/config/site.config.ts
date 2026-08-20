// ============================================================
// SITE CONFIG — Change only this file per client
// ============================================================
import type { IconName } from '../components/icon/icon.component';

export const SITE_CONFIG = {
  business: {
    name: 'Avaxel & Co.',
    tagline: 'The #1 Digital Agency For Nigerian Businesses',
    sub: 'We build your website, manage your social media and run your ads — so you can focus on running your business.',
    phone: '+2347033982939',
    email: 'hello@avaxel.com',
    address: 'Victoria Island, Lagos',
    whatsapp: '2347033982939',
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    twitter: 'https://twitter.com/',
  },
  accent: '#FF2D6B',

  stats: [
    { val: '100+', label: 'Clients Served' },
    { val: '98%', label: 'Retention Rate' },
    { val: '8 Days', label: 'Website Delivery' },
    { val: '3x', label: 'Avg. Growth' },
  ],

  services: [
    { icon: 'globe', title: 'Website Included', desc: 'Every package includes a professionally built, mobile-first website at no extra cost.' },
    { icon: 'smartphone', title: 'Social Media', desc: 'Daily content, captions and scheduling across Instagram, Facebook and Twitter.' },
    { icon: 'megaphone', title: 'Paid Ads', desc: 'Facebook and Google ad campaigns managed to bring you real paying customers.' },
    { icon: 'bar-chart', title: 'Monthly Reports', desc: 'Clear weekly and monthly reports showing your growth and what we are doing about it.' },
    { icon: 'edit', title: 'Content Strategy', desc: 'A full content calendar and brand voice guide built specifically for your audience.' },
    { icon: 'mail', title: 'Email Marketing', desc: 'We write, design and send targeted email campaigns that keep your audience engaged and drive repeat sales.' },
    { icon: 'landmark', title: 'CAC Registration', desc: 'We handle your business registration from start to finish as an optional add-on.' },
  ] satisfies { icon: IconName; title: string; desc: string }[],

  steps: [
    { num: '01', title: 'You Reach Out', desc: 'Send us a WhatsApp or fill the form. We respond within the hour.' },
    { num: '02', title: 'Free Audit Call', desc: 'We review your current online presence and show you exactly what is missing.' },
    { num: '03', title: 'We Build Everything', desc: 'Your website goes live within 8 days. Content starts the same week.' },
    { num: '04', title: 'You Grow', desc: 'We manage everything monthly while you watch your business grow online.' },
  ],

  packages: [
    {
      name: 'Starter',
      hot: false,
      features: ['5-page website included', '3 posts/week', 'Caption writing', 'Basic ads management', 'Email marketing', 'Monthly report', 'WhatsApp support'],
    },
    {
      name: 'Growth',
      hot: true,
      features: ['Custom website included', '5 posts/week', 'Content strategy', 'Ads management', 'Email campaigns', 'Weekly reports', 'Monthly strategy call'],
    },
    {
      name: 'Premium',
      hot: false,
      features: ['Advanced website included', 'Daily content', 'Full ads management', 'Email marketing automation', 'SEO optimization', 'Priority support', 'Dedicated account manager'],
    },
  ],

  testimonials: [
    { name: 'Adaeze Okonkwo', role: 'CEO, Adaeze Skincare', text: 'Our Instagram went from 800 to 12,000 followers in 4 months. Sales tripled. Best investment I made for my business.', initials: 'AO' },
    { name: 'Emeka Nwosu', role: 'Owner, Nwosu Properties', text: 'They built our website for free and it looks better than agencies charging 10x more. Highly recommend.', initials: 'EN' },
    { name: 'Fatima Al-Hassan', role: 'MD, Fatima\'s Kitchen', text: 'I used to struggle with content ideas. Now everything is handled. My brand looks consistent and professional.', initials: 'FA' },
  ],

  problems: [
    { icon: 'clock', text: 'I have no time to post consistently' },
    { icon: 'layout', text: 'My website looks unprofessional' },
    { icon: 'target', text: 'I don\'t know how to run ads' },
    { icon: 'trending-down', text: 'My competitors are growing faster than me' },
  ] satisfies { icon: IconName; text: string }[],
};
