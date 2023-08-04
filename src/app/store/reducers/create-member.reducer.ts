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
  currentMemberId: null,
  status: null
};

export const createMemberFeatureKey = 'member';

export const createMemberFeature = createFeature({
  name: 'member',
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
        collection: createMember(state.collection, action.member),
        currentMemberId: null,
        error: null,
        status: null
      };
    }),
    on(MemberCreatedApiActions.memberCreated, (state, action) => {
      return {
        collection: createMember(state.collection, action.member),
        currentMemberId: null,
        error: null,
        status: 'save'
      };
    }),
    on(MemberCreatedApiActions.memberCreatedFailure, (state, action) => {
      return {
        ...state,
        error: action.error,
        status: 'error'
      };
    })
  )
});

export const createMemberSelector = createSelector(
  createFeatureSelector(createMemberFeatureKey),
  (state: CreateMemberState) => state
);
