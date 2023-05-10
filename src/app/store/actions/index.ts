import { createAction, props } from '@ngrx/store';

export const UpdateTheme = createAction('[Theme] Light theme', props<{theme: string}>());
