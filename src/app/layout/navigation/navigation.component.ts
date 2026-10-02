import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  readonly variant = input<'inline' | 'menu'>('inline');
  readonly navigated = output<void>();
  readonly items = [
    { path: '/', label: 'navigation.home' }, { path: '/about', label: 'navigation.about' },
    { path: '/experience', label: 'navigation.experience' }, { path: '/projects', label: 'navigation.projects' },
    { path: '/skills', label: 'navigation.skills' }, { path: '/contact', label: 'navigation.contact' }
  ];
}
