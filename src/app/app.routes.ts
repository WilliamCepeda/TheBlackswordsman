import { Routes } from '@angular/router';
import { PortfolioShellComponent } from './layout/portfolio-shell/portfolio-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioShellComponent,
    children: [
      { path: '', pathMatch: 'full', loadComponent: () => import('./features/cover/cover.component').then(m => m.CoverComponent) },
      { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
      { path: 'experience', loadComponent: () => import('./features/experience/experience.component').then(m => m.ExperienceComponent) },
      {
        path: 'projects',
        children: [
          { path: '', pathMatch: 'full', loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent) },
          { path: ':projectId/:sectionId', loadComponent: () => import('./features/projects/project-detail.component').then(m => m.ProjectDetailComponent) },
          { path: '**', redirectTo: '' }
        ]
      },
      { path: 'skills', loadComponent: () => import('./features/skills/skills.component').then(m => m.SkillsComponent) },
      { path: 'contact', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];
