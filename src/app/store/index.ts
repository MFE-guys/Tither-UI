import { signal } from '@angular/core';

import { createReducer, on } from '@ngrx/store';

import { darkTheme, lightTheme } from "./actions";

export const initialTheme = 'saga-green';
export const globalTheme = signal(initialTheme);

const _themeReducer = createReducer(
  initialTheme,
  on(lightTheme, state => 'saga-green'),
  on(darkTheme, state => 'vela-green'),
);

export function themeReducer(state: any, action: any) {
  return _themeReducer(state, action);
}
