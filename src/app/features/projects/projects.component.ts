import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SeoService } from '../../core/services/seo.service';
import { PROJECTS } from '../../data/projects';
import { PageComponent } from '../../layout/book/page.component';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, TranslatePipe, PageComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent { readonly projects = PROJECTS; constructor() { inject(SeoService).update('Projects', 'Selected software engineering projects.'); } }
