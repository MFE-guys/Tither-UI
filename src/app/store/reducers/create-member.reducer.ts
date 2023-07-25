import { CreateMemberRequiredProps } from 'src/app/core/models/interface/create-member.interface';

import {
  createFeature,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';

import {
  CreateMemberActions,
  CreateMemberState,
  MemberCreatedApiActions
} from '../actions/create-member.actions';

const createMember = (
  registers: CreateMemberRequiredProps[],
  register: CreateMemberRequiredProps
): CreateMemberRequiredProps[] => [...registers, register];

export const initialState: CreateMemberState = {
  collection: [],
  error: null,
  currentMemberId: null
};

export const createMemberFeatureKey = 'member';

export const createMemberFeature = createFeature({
  name: 'register',
  reducer: createReducer(
    initialState,
    on(CreateMemberActions.enter, state => {
      return {
        ...state,
        currentMemberId: null,
        error: null
      };
    }),
    on(CreateMemberActions.createMember, (state, action) => {
      return {
        collection: createMember(state.collection, action.register),
        currentMemberId: null,
        error: null
      };
    }),
    on(MemberCreatedApiActions.memberCreated, (state, action) => {
      return {
        collection: createMember(state.collection, action.register),
        currentMemberId: null,
        error: null
      };
    }),
    on(MemberCreatedApiActions.memberCreatedFailure, (state, action) => {
      return {
        collection: [],
        currentMemberId: null,
        error: action.error
      };
    })
  )
});

export const createMemberSelector = createSelector(
  createFeatureSelector(createMemberFeatureKey),
  (state: CreateMemberState) => state
);
