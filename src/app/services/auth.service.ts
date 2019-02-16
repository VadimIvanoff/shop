import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewUser} from '../models/user';
import {Login} from '../models/login';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api_url = 'http://localhost:5000/api/auth/';
  private loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLoggedIn: boolean;

  constructor(private http: HttpClient) {
  }
  get loggedIn(): boolean {
    return this.isLoggedIn;
  }
  registerNewUser(user: NewUser): Observable<boolean> {
    return this.http.post(this.api_url + 'register', user, {withCredentials: true}).pipe(
      map(result => {
        this.isLoggedIn = true;
        return true;
      })
    );
  }

  login(login: Login): Observable<boolean> {
    return this.http.post(this.api_url + 'login', login, {withCredentials: true}).pipe(
      map(result => {
       this.isLoggedIn = true;
       console.log(this.isLoggedIn);
        return true;
      })
    );
  }
}
