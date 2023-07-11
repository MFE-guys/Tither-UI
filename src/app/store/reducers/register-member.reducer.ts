import { RegisterMemberRequiredProps } from 'src/app/core/model/interface/register-member.interface';

import {
  createFeature,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';

import {
  RegisterMemberActions,
  RegisterMemberState,
  RegisteredMemberApiActions
} from '../actions/register-member.actions';

const registerMember = (
  registers: RegisterMemberRequiredProps[],
  register: RegisterMemberRequiredProps
): RegisterMemberRequiredProps[] => [...registers, register];

export const initialState: RegisterMemberState = {
  collection: [],
  currentMemberId: null
};

export const registerMemberFeatureKey = 'register';

export const registerMemberReducer = createReducer(
  initialState,
  on(RegisterMemberActions.enter, state => {
    return {
      ...state,
      currentMemberId: null
    };
  }),
  on(RegisterMemberActions.registerMemberAdded, (state, action) => {
    return {
      collection: registerMember(state.collection, action.register),
      currentMemberId: null
    };
  }),
  on(RegisteredMemberApiActions.registeredMemberAdded, (state, action) => {
    return {
      collection: registerMember(state.collection, action.register),
      currentMemberId: null
    };
  }),
  on(RegisteredMemberApiActions.registeredMemberFailure, state => {
    return {
      ...state
    };
  })
);

export const registerMemberSelector = createSelector(
  createFeatureSelector(registerMemberFeatureKey),
  (state: RegisterMemberRequiredProps[]) => state
);
