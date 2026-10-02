import { Injectable, computed, signal } from '@angular/core';
import { PROJECT_SECTIONS } from '../models/project.model';
import { PROJECTS } from '../../data/projects';

export const projectBookPages = PROJECTS.flatMap(project =>
  PROJECT_SECTIONS.map(section => `projects/${project.id}/${section}`)
);

export const portfolioPages: readonly string[] = [
  '',
  'about',
  'experience',
  'projects',
  ...projectBookPages,
  'skills',
  'contact'
];

@Injectable({ providedIn: 'root' })
export class BookNavigationService {
  private readonly pageIndex = signal(0);
  readonly currentPage = this.pageIndex.asReadonly();
  readonly currentPageLabel = computed(() => String(this.pageIndex() + 1).padStart(2, '0'));
  readonly totalPagesLabel = String(portfolioPages.length).padStart(2, '0');
  readonly canGoBack = computed(() => this.pageIndex() > 0);
  readonly canGoForward = computed(() => this.pageIndex() < portfolioPages.length - 1);

  sync(path: string): void {
    const index = this.indexOf(path);
    this.pageIndex.set(index < 0 ? 0 : index);
  }

  previousPath(): string { return portfolioPages[Math.max(0, this.pageIndex() - 1)]; }
  nextPath(): string { return portfolioPages[Math.min(portfolioPages.length - 1, this.pageIndex() + 1)]; }

  private indexOf(path: string): number {
    const normalized = path.split(/[?#]/)[0].replace(/^\//, '').replace(/\/$/, '');
    return portfolioPages.indexOf(normalized);
  }
}
