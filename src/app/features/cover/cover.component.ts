import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-cover',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoverComponent { constructor() { inject(SeoService).update('Portfolio', 'Software engineering, industrial automation, digital twins and 3D.'); } }
