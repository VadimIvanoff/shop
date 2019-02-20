import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {InfoService} from '../../services/info.service';
import {tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {LoginAction} from '../auth-actions.actions';
import {noop} from 'rxjs';
import {AppState} from '../../reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService,
              private router: Router, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['qwe@qwe', [Validators.required, Validators.email]],
      password: ['Qwerty1!', Validators.required],
    });
  }

  login(): void {
    if (this.form.valid) {
      this.auth.login(this.form.value).pipe(
        tap(user => {
          this.store.dispatch(new LoginAction(user));
          this.router.navigateByUrl('private-room');
        }))
        .subscribe();
    }
  }
}
