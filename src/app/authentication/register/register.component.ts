import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComparePasswords} from '../comparePasswords';
import {NewUser} from '../../models/new-user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {InfoService} from '../../services/info.service';
import {AppState} from '../../reducers';
import {Store} from '@ngrx/store';
import {RegisterAction} from '../auth-actions.actions';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  registerErrors: string[] = [];

  constructor(private fb: FormBuilder, private auth: AuthService,
              private router: Router, private info: InfoService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
    this.form.setValidators(ComparePasswords());
  }

  register(): void {
    if (this.form.valid) {
      this.auth.registerNewUser(this.form.value).pipe(
        tap(user => {
          this.store.dispatch(new RegisterAction(user));
          this.router.navigateByUrl('/private-room');
        }))
        .subscribe();
    }
  }
}
