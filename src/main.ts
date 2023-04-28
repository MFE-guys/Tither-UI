import '@angular/compiler';
import 'zone.js';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, NgZone } from '@angular/core';
import { appRouting } from './app.routing';

import './styles.scss';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([BrowserModule, BrowserAnimationsModule]),
    {
      provide: NgZone,
      useValue: new NgZone({ shouldCoalesceEventChangeDetection: false })
    },
    ...appRouting
  ]
}).catch(err => console.error(err));

async function lazyOther() {
  const { otherAction } = await import('./other');
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = 'Hello world';
  otherAction();
}

if (false) lazyOther();
