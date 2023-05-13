import { Inject, Injectable, Injector, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Store } from '@ngrx/store';

import { darkTheme, lightTheme } from './store/actions';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  private storeTheme = inject(Store<{ theme: string }>);

  injector = inject(Injector);
  state = signal<string>('saga-green');

  startedTheme(key: string): void {
    const storageValue = localStorage.getItem(key);

    if(storageValue) this.themeEffect(key, storageValue);
    else this.themeEffect(key, this.state());
  }

  themeEffect(key: string, initialState: string): void {
    this.state.set(initialState);

    effect(() => {
      localStorage.setItem(key, this.state());
    }, { injector: this.injector });

    if(this.state() === 'saga-green') this.storeTheme.dispatch(lightTheme());
    else this.storeTheme.dispatch(darkTheme());

    this.switchTheme();
  }

  private switchTheme(): void {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) themeLink.href = `${this.state()}.css`;
  }
}
