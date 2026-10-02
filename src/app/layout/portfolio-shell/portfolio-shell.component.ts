import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BookNavigationService } from '../../core/services/book-navigation.service';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-portfolio-shell',
  imports: [RouterOutlet, HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './portfolio-shell.component.html',
  styleUrl: './portfolio-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioShellComponent {
  private readonly router = inject(Router);
  readonly navigation = inject(BookNavigationService);

  constructor() {
    this.navigation.sync(this.router.url);
    this.router.events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (event instanceof NavigationEnd) this.navigation.sync(event.urlAfterRedirects);
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeyboard(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft' && this.navigation.canGoBack()) void this.router.navigateByUrl(this.navigation.previousPath());
    if (event.key === 'ArrowRight' && this.navigation.canGoForward()) void this.router.navigateByUrl(this.navigation.nextPath());
  }
}
