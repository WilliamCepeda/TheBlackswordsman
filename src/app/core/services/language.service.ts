import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type SupportedLanguage = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'portfolio-language';

  readonly current = signal<SupportedLanguage>(this.initialLanguage());

  constructor() {
    this.translate.addLangs(['es', 'en']);
    this.setLanguage(this.current());
  }

  setLanguage(language: SupportedLanguage): void {
    this.current.set(language);
    this.document.documentElement.lang = language;
    this.translate.use(language);
    try { localStorage.setItem(this.storageKey, language); } catch { /* Storage can be unavailable. */ }
  }

  toggle(): void {
    this.setLanguage(this.current() === 'es' ? 'en' : 'es');
  }

  private initialLanguage(): SupportedLanguage {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'es' || stored === 'en') return stored;
    } catch { /* Fall back to browser language. */ }
    return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
  }
}
