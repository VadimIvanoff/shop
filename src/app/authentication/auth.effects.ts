import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, LoginAction, LogoutAction, RegisterAction} from './auth-actions.actions';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, Observable, of} from 'rxjs';

@Injectable()
export class AuthEffects {

  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<LoginAction>(AuthActionTypes.LoginAction),
    tap(action => {
      console.log(action.payload.name);
      localStorage.setItem('user', action.payload.name);
    })
  );
  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<LogoutAction>(AuthActionTypes.LogoutAction),
    tap(action => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/');
    })
  );
  @Effect({dispatch: false})
  register$ = this.actions$.pipe(
    ofType<RegisterAction>(AuthActionTypes.RegisterAction),
    tap(action => localStorage.setItem('user', action.payload.name))
  );
  @Effect()
  init$ = defer((): Observable<LoginAction | LogoutAction> => {
    const userInfo = localStorage.getItem('user');
    console.log(`userInfo from local - ${userInfo}`);
    if (userInfo) {
      return of(new LoginAction({name: userInfo}));
    } else {
      return of(new LogoutAction());
    }
  });

  constructor(private actions$: Actions, private router: Router) {
  }

}
