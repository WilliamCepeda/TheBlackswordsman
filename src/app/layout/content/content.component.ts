import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BookNavigationService } from '../../core/services/book-navigation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {
  private readonly router = inject(Router);
  private readonly navigation = inject(BookNavigationService);
  private id: number | null = null;
  private originX = 0;
  private originY = 0;
  private startedAt = 0;

  pointerDown(event: PointerEvent): void {
    if (event.pointerType === 'mouse' || !event.isPrimary || this.interactive(event.target)) return;

    this.id = event.pointerId;
    this.originX = event.clientX;
    this.originY = event.clientY;
    this.startedAt = event.timeStamp;
    (event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId);
  }

  pointerUp(event: PointerEvent): void {
    if (event.pointerId !== this.id) return;

    const x = event.clientX - this.originX;
    const y = event.clientY - this.originY;
    const elapsed = Math.max(1, event.timeStamp - this.startedAt);
    const threshold = Math.min(76, Math.max(48, window.innerWidth * .18));
    const isFlick = Math.abs(x) >= 28 && elapsed <= 450 && Math.abs(x) / elapsed >= .35;
    const isHorizontal = Math.abs(x) > Math.abs(y) * 1.15;
    const shouldNavigate = isHorizontal && (Math.abs(x) >= threshold || isFlick);

    this.resetGesture();

    if (shouldNavigate) this.go(x < 0 ? 1 : -1);
  }

  resetGesture(): void {
    this.id = null;
  }

  private go(direction: -1 | 1): void {
    if (direction === 1 && this.navigation.canGoForward()) void this.router.navigateByUrl(this.navigation.nextPath());
    if (direction === -1 && this.navigation.canGoBack()) void this.router.navigateByUrl(this.navigation.previousPath());
  }

  private interactive(target: EventTarget | null): boolean {
    return target instanceof Element && Boolean(target.closest('a,button,input,textarea,select,label,[contenteditable="true"]'));
  }
}
