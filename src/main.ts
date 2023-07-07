import { AppComponent } from './app/app.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  importProvidersFrom,
  LOCALE_ID,
  DEFAULT_CURRENCY_CODE
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { themeReducer } from './app/store/reducers';

import ptBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { registerMemberReducer } from './app/store/reducers/register-member.reducer';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler
} from '@angular/common/http';

registerLocaleData(ptBr);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule
    ),
    provideStore(),
    provideState('register', registerMemberReducer),
    provideRouter(routes),
    provideStoreDevtools(),
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
});
