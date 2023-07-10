import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import * as uuid from 'uuid';

import {
  RegisterMemberModel,
  RegisterMemberRequiredProps
} from '../model/interface/register-member.interface';

const BASE_URL = 'http://localhost:3000';
const HEADER = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterMemberService {
  private httpClient = inject(HttpClient);

  registerMember(
    registerProps: RegisterMemberRequiredProps
  ): Observable<RegisterMemberModel> {
    const register: RegisterMemberModel = {
      id: uuid.v4(),
      ...registerProps
    };

    return this.httpClient.post<RegisterMemberModel>(
      `${BASE_URL}/register`,
      JSON.stringify(register),
      HEADER
    );
  }
}
