import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SeoService } from '../../core/services/seo.service';
import { PageComponent } from '../../layout/book/page.component';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, PageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly values = [{ key: 'proactivity', symbol: '↟' }, { key: 'discipline', symbol: '◇' }, { key: 'purpose', symbol: '✦' }, { key: 'collaboration', symbol: '◎' }];
  constructor() { inject(SeoService).update('About', 'About me, my values and the way I approach software engineering.'); }
}
