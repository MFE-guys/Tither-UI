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

    if(storageValue) {
      this.switchTheme(key, storageValue);
    } else {
      this.switchTheme(key, this.state());
    }
  }


  switchTheme(key: string, initialState: string): void {
    const storageValue = localStorage.getItem(key);
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if(storageValue) this.state.set(storageValue);
    this.state.set(initialState);

    effect(() => {
      localStorage.setItem(key, this.state());
    }, { injector: this.injector });

    this.state() === 'saga-green'
      ? this.storeTheme.dispatch(lightTheme())
      : this.storeTheme.dispatch(darkTheme());


    if (themeLink) {
      themeLink.href = `${this.state()}.css`;
    }
  }
}
