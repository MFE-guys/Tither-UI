import { Injectable, inject } from '@angular/core';
import { RegisterMemberService } from 'src/app/core/services/register-member.service';
import { RegisterMemberRequiredProps } from 'src/app/core/model/interface/register-member.interface';

import { catchError, exhaustMap, from, map, of, switchMap, tap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  RegisterMemberActions,
  RegisteredMemberApiActions
} from '../actions/register-member.actions';
import { MessageActions } from '../actions/message.actions';

@Injectable()
export class RegisterMemberEffect {
  private actions$ = inject(Actions);
  private registerMemberService = inject(RegisterMemberService);

  addMember$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterMemberActions.registerMemberAdded),
      exhaustMap(({ register }) =>
        from(this.registerMemberService.registerMember(register)).pipe(
          map(response => response),
          map((registerMember: RegisterMemberRequiredProps) =>
            RegisteredMemberApiActions.registeredMemberAdded({
              register: registerMember
            })
          ),
          catchError(err =>
            of(
              RegisteredMemberApiActions.registeredMemberFailure({ error: err })
            )
          )
        )
      )
    )
  );
}
