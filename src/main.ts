import { AppComponent } from './app/app.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ROOT_REDUCERS, metaReducers } from './app/store/reducers'
import { provideStore, StoreModule } from '@ngrx/store';
import { counterReducer, themeReducer } from './app/store';
// import { ThemeReducer } from './app/store/reducers/theme.reducer';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    provideStore({ theme: themeReducer  })
  ]
});
