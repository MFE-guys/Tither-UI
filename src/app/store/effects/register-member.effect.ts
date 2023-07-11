import { Injectable, inject } from '@angular/core';
import { RegisterMemberService } from 'src/app/core/services/register-member.service';

import { exhaustMap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { RegisteredMemberApiActions } from '../actions/register-member.actions';

@Injectable()
export class RegisterMemberEffect {
  private actions$ = inject(Actions);
  private registerMemberService = inject(RegisterMemberService);
}
