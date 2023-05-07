// import * as Theme from './theme.actions'
//
// export { Theme };

import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const lightTheme = createAction('[Theme] Light theme');
export const darkTheme = createAction('[Theme] Dark theme');

