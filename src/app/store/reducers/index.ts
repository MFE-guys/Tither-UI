import { signal } from '@angular/core';

import { Action, createReducer, on } from '@ngrx/store';

import { themeActions } from '../actions';

export const initialTheme = 'saga-green';
export const keyFeature = 'theme';
export const globalTheme = signal(initialTheme);

const _themeReducer = createReducer(
  initialTheme,
  on(themeActions.lightTheme, () => 'saga-green'),
  on(themeActions.darkTheme, () => 'vela-green')
);

export function themeReducer(
  state: string | undefined,
  action: Action
): string {
  return _themeReducer(state, action);
}
