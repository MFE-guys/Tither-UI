import { AppComponent } from './app/app.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  importProvidersFrom,
  LOCALE_ID,
  DEFAULT_CURRENCY_CODE
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { themeReducer } from './app/store/reducers';

import ptBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';

registerLocaleData(ptBr);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    provideStore({ theme: themeReducer }),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
});
