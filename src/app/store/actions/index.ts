// import * as Theme from './theme.actions'
//
// export { Theme };

import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const UpdateTheme = createAction('[Theme] Light theme', props<{theme: string}>());
