import { RegisterMemberRequiredProps } from 'src/app/core/model/interface/register-member.interface';

import { createActionGroup, emptyProps, props } from '@ngrx/store';

export interface RegisterMemberState {
  collection: RegisterMemberRequiredProps[];
  currentMemberId: string | null;
}

export const RegisterMemberActions = createActionGroup({
  source: 'Register Member',
  events: {
    Enter: emptyProps(),
    'Register Member Added': props<{ register: RegisterMemberRequiredProps }>()
  }
});

export const RegisteredMemberApiActions = createActionGroup({
  source: 'Registered Member Api',
  events: {
    Enter: emptyProps(),
    'Registered Member Added': props<{
      register: RegisterMemberRequiredProps;
    }>(),
    'Registered Member Failure': props<{
      error: string;
    }>(),
    'Registered Member Loaded Success': props<{
      register: RegisterMemberRequiredProps[];
    }>()
  }
});
