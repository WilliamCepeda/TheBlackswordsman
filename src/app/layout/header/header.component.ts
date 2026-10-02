import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '../../shared/components/language-selector/language-selector.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, NavigationComponent, LanguageSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { readonly menuOpen = signal(false); }
