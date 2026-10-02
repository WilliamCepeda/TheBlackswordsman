import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export const BOOK_BREAKPOINTS = {
  mobile: '(max-width: 767.98px)',
  tablet: '(min-width: 768px) and (max-width: 1199.98px)',
  desktop: '(min-width: 1200px) and (min-height: 700px)',
  short: '(max-height: 699.98px)'
} as const;

@Injectable({ providedIn: 'root' })
export class ResponsiveLayoutService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly state$ = this.breakpointObserver.observe(Object.values(BOOK_BREAKPOINTS)).pipe(
    map(state => ({
      mode: (state.breakpoints[BOOK_BREAKPOINTS.desktop]
        ? 'desktop'
        : state.breakpoints[BOOK_BREAKPOINTS.mobile] ? 'mobile' : 'tablet') as ViewportMode,
      short: state.breakpoints[BOOK_BREAKPOINTS.short]
    })),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private readonly state = toSignal(this.state$, { initialValue: { mode: 'mobile' as ViewportMode, short: false } });
  readonly mode = () => this.state().mode;
  readonly isDesktop = () => this.state().mode === 'desktop';
  readonly isMobile = () => this.state().mode === 'mobile';
  readonly isShortViewport = () => this.state().short;
}
