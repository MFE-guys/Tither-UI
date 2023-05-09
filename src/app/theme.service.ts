import { Inject, Injectable, Injector, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  private injector = inject(Injector);

  switchTheme(theme: string): void {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      // localStorage.setItem('theme', theme);

        // themeLink.href = `${localStorage.getItem('theme')}.css`;

      themeLink.href = `${theme}.css`;

    }
  }
}
