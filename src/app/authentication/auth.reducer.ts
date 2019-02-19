import {User} from '../models/user';
import {AuthActions, AuthActionTypes} from './auth-actions.actions';


export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function reducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload
      }
      break;
    case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined
      }
      break;
    case AuthActionTypes.RegisterAction:
      return {
        loggedIn: true,
        user: action.payload
      }
      break;
    default:
      return state;
  }
}
