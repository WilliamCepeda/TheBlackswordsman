import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SeoService } from '../../core/services/seo.service';
import { PageComponent } from '../../layout/book/page.component';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, PageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent { constructor() { inject(SeoService).update('Contact', 'Contact me to build something meaningful.'); } }
