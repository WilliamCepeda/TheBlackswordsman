import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { PROJECT_SECTIONS, ProjectSection } from '../../core/models/project.model';
import { BookNavigationService } from '../../core/services/book-navigation.service';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { PROJECTS } from '../../data/projects';
import { PageComponent } from '../../layout/book/page.component';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TranslatePipe, PageComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailComponent {
  readonly projectId = input('');
  readonly sectionId = input('intro');
  readonly language = inject(LanguageService);
  readonly navigation = inject(BookNavigationService);
  private readonly seo = inject(SeoService);
  private readonly translate = inject(TranslateService);

  readonly project = computed(() => PROJECTS.find(project => project.id === this.projectId()) ?? PROJECTS[0]);
  readonly section = computed<ProjectSection>(() => {
    const requested = this.sectionId() as ProjectSection;
    return PROJECT_SECTIONS.includes(requested) ? requested : 'intro';
  });
  readonly sectionNumber = computed(() => String(PROJECT_SECTIONS.indexOf(this.section()) + 1).padStart(2, '0'));

  constructor() {
    effect(onCleanup => {
      const project = this.project();
      this.language.current();
      const subscription = this.translate.get([project.title, project.description]).subscribe(translations => {
        this.seo.update(translations[project.title], translations[project.description]);
      });
      onCleanup(() => subscription.unsubscribe());
    });
  }

  bookPath(path: string): string {
    return path ? `/${path}` : '/';
  }
}
