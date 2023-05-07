// interface ThemeAction {
//   type: string
// }
//
// export class Theme implements ThemeAction {
//   readonly type = '[THEME] Change theme';
//
//   constructor(public payload: { theme: string }) {  }
// // }

import { createReducer, on } from "@ngrx/store";
import { darkTheme, decrement, increment, lightTheme } from "./actions";

export const initialState = 0;
export const initialTheme = 'lightTheme'

const _counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
)

const _themeReducer = createReducer(
  initialTheme,
  on(lightTheme, state => 'sega-green'),
  on(darkTheme, state => 'vela-green')
)

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action)
}

export function  themeReducer(state: any, action: any) {
  return _themeReducer(state, action)
}
