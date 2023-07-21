import { Injectable, inject } from '@angular/core';
import { RegisterMemberService } from 'src/app/core/services/register-member.service';
import { RegisterMemberRequiredProps } from 'src/app/core/model/interface/register-member.interface';

import {
  catchError,
  exhaustMap,
  finalize,
  from,
  map,
  of,
  switchMap,
  tap,
  throwError
} from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import {
  RegisterMemberActions,
  RegisteredMemberApiActions
} from '../actions/register-member.actions';
import { MessageActions } from '../actions/message.actions';

@Injectable()
export class RegisterMemberEffect {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private registerMemberService = inject(RegisterMemberService);

  addMember$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterMemberActions.registerMemberAdded),
      exhaustMap(({ register }) =>
        from(this.registerMemberService.registerMember(register)).pipe(
          map((registerMember: RegisterMemberRequiredProps) =>
            RegisteredMemberApiActions.registeredMemberAdded({
              register: registerMember
            })
          ),
          tap(() =>
            this.store.dispatch(
              MessageActions.sendMessage({
                message: {
                  severity: 'Success',
                  detail: 'Member created with success'
                }
              })
            )
          ),
          catchError(err => {
            this.store.dispatch(
              MessageActions.sendMessage({
                message: {
                  severity: 'Error',
                  detail: 'Member not added'
                }
              })
            );
            return of(
              RegisteredMemberApiActions.registeredMemberFailure({ error: err })
            );
          })
        )
      )
    )
  );
}
