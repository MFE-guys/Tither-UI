import { signal } from '@angular/core';

import { Action, createReducer, on } from '@ngrx/store';

import { darkTheme, lightTheme } from "./actions";

export const initialTheme = 'saga-green';
export const globalTheme = signal(initialTheme);

const _themeReducer = createReducer(
  initialTheme,
  on(lightTheme, () => 'saga-green'),
  on(darkTheme, () => 'vela-green'),
);

export function themeReducer(state: string | undefined, action: Action): string {
  return _themeReducer(state, action);
}
