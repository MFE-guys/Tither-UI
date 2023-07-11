import { MessageModel } from 'src/app/core/model/interface/message.interface';

import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';

import { MessageActions } from '../actions/message.actions';

export const initialState: MessageModel = {
  severity: '',
  detail: ''
};

export const messageFeatureKey = 'message';

export const MessageReducer = createReducer(
  initialState,
  on(MessageActions.enter, state => {
    return {
      ...state
    };
  }),
  on(MessageActions.sendMessage, (state, { message }) => ({
    ...message
  }))
);

export const MessageSelector = createSelector(
  createFeatureSelector('message'),
  (state: MessageModel) => state
);
