// import {
//   createSelector,
//   createFeatureSelector,
//   ActionReducer,
//   Action,
//   ActionReducerMap,
//   MetaReducer,
// } from '@ngrx/store';
// import { InjectionToken, isDevMode } from '@angular/core'
// import * as fromTheme from './theme.reducer'
//
// export interface State {
//   [fromTheme.themeFeatureKey]: fromTheme.ThemeState
// }
//
// export const ROOT_REDUCERS = new InjectionToken<
//   ActionReducerMap<State, Action>
//     >
//   ('Root reducer token', {
//     factory: () => ({
//       [fromTheme.themeFeatureKey]: fromTheme.ThemeReducer
//     })
//   })
//
// export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
//   return (state, action) => {
//     const result = reducer(state, action);
//     console.groupCollapsed(action.type);
//     console.log('prev state', state);
//     console.log('action', action);
//     console.log('next state', result);
//     console.groupEnd();
//
//     return result;
//   };
// }
//
// export const metaReducers: MetaReducer<State>[] = isDevMode() ? [logger] : [];
//
// /**
//  * Layout Selectors
//  */
// export const selectThemeState = createFeatureSelector<fromTheme.ThemeState>(
//   fromTheme.themeFeatureKey
// );
//
// export const selectDarkTheme = createSelector(
//   selectThemeState,
//   fromTheme.selectTheme
// );
