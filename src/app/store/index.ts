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

import { UpdateTheme, decrement, increment, } from "./actions";
export interface themeType {
  theme: string;
}
export const initialState = 0;
export const initialTheme: themeType = {
  theme: 'saga-green'
};

const _counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
);

const _themeReducer = createReducer(
  initialTheme,
  on(UpdateTheme, (state, {theme}) => ({...state, theme})),
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

export function  themeReducer(state: any, action: any): themeType {
  return _themeReducer(state, action);
}
