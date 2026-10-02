import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SeoService } from '../../core/services/seo.service';
import { EXPERIENCES } from '../../data/experience';
import { PageComponent } from '../../layout/book/page.component';

@Component({
  selector: 'app-experience',
  imports: [TranslatePipe, PageComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent { readonly experiences = EXPERIENCES; constructor() { inject(SeoService).update('Experience', 'Professional experience and technologies.'); } }
