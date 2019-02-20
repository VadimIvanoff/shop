import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewUser} from '../models/new-user';
import {Login} from '../models/login';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {InfoService} from './info.service';
import {User} from '../models/user';
import {select, Store} from '@ngrx/store';
import {isLoggedIn, isLoggedOut} from '../authentication/auth.selectors';
import {AppState} from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api_url = 'http://localhost:5000/api/auth/';
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  private isLoggedIn: boolean;

  constructor(private http: HttpClient, private info: InfoService, private store: Store<AppState>) {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  get loggedIn(): boolean {
    return this.isLoggedIn;
  }

  login(login: Login): Observable<User> {
    return this.http.post<User>(this.api_url + 'login', login, {withCredentials: true}).pipe(
      catchError(err => {
        this.info.reportMessage2(err.error);
        return of({name: ''});
      })
    );
  }

  logout(): Observable<any> {
    return this.http.get(this.api_url + 'logout', {withCredentials: true}).pipe(
      catchError(err => {
        this.info.reportMessage2(err.error);
        return of(false);
      })
    );
  }

  registerNewUser(user: NewUser): Observable<User> {
    return this.http.post<User>(this.api_url + 'register', user, {withCredentials: true}).pipe(
      catchError(err => {
        this.info.reportMessage2(err.error);
        return of({name: ''});
      })
    );
  }
}
