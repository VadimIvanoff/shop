import { Action } from '@ngrx/store';
import {User} from '../models/user';

export enum AuthActionTypes {
  LoginAction = '[LoginComponent] Login',
  LogoutAction = '[LoginComponent] Logout',
  RegisterAction = '[RegisterComponent] Register'
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: User) {}
}
export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}
export class RegisterAction implements Action {
  readonly type = AuthActionTypes.RegisterAction;
  constructor(public payload: User) {}
}

export type AuthActions = LoginAction | LogoutAction | RegisterAction;
