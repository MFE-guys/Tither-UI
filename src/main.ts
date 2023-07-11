import { AppComponent } from './app/app.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  importProvidersFrom,
  LOCALE_ID,
  DEFAULT_CURRENCY_CODE
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import ptBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { RegisterMemberEffect } from './app/store/effects/register-member.effect';
import { registerMemberFeature } from './app/store/reducers/register-member.reducer';
import { themeFeature } from './app/store/reducers/theme.reducer';
import { messageFeature } from './app/store/reducers/message.reducer';

registerLocaleData(ptBr);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule
    ),
    provideStore(),
    provideState(registerMemberFeature),
    provideState(messageFeature),
    provideState(themeFeature),
    provideRouter(routes),
    provideStoreDevtools(),
    provideEffects(RegisterMemberEffect),
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
});
