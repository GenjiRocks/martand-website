import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    title: 'Martand Legal Advisors | Corporate Law Firm'
  },
  {
    path: 'practice-areas',
    loadComponent: () => import('./pages/practice-areas/practice-areas').then(m => m.PracticeAreasComponent),
    title: 'Practice Areas | Martand Legal Advisors'
  },
  {
    path: 'people',
    loadComponent: () => import('./pages/people/people').then(m => m.PeopleComponent),
    title: 'People | Martand Legal Advisors'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    title: 'About | Martand Legal Advisors'
  },
  {
    path: 'insights',
    loadComponent: () => import('./pages/insights/insights').then(m => m.InsightsComponent),
    title: 'Insights & Recent Work | Martand Legal Advisors'
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers').then(m => m.CareersComponent),
    title: 'Careers | Martand Legal Advisors'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
    title: 'Contact | Martand Legal Advisors'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
