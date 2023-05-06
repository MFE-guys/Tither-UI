import {signal} from "@angular/core";
import {Action, ActionReducer, INIT} from "@ngrx/store";

const initialState = {}
const state = signal(initialState);

const initialReducer: ActionReducer<any, any> = (state = initialState, action: any) => {
  return state;
}
const reducer = signal(initialReducer);

const actions = signal<Action>({type: INIT});
