import { createReducer, on } from '@ngrx/store';

import { UpdateTheme } from "./actions";
export interface themeType {
  theme: string;
}

export const initialTheme: themeType = {
  theme: 'saga-green'
};

const _themeReducer = createReducer(
  initialTheme,
  on(UpdateTheme, (state, {theme}) => ({...state, theme})),
);


export function themeReducer(state: themeType | undefined, action: any): themeType {
  return _themeReducer(state, action);
}
