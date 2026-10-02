import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BookNavigationService } from '../../core/services/book-navigation.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly navigation = inject(BookNavigationService);
  readonly year = new Date().getFullYear();
  readonly pages = [{ path: '/' }, { path: '/about' }, { path: '/experience' }, { path: '/projects' }, { path: '/skills' }, { path: '/contact' }];
}
