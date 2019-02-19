import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComparePasswords} from '../comparePasswords';
import {NewUser} from '../../models/new-user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  registerErrors: string[] = [];
  constructor(private fb: FormBuilder, private auth: AuthService,
              private router: Router, private info: InfoService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm: ['']
    });
    this.form.setValidators(ComparePasswords());
  }
  register(): void {
    if (this.form.valid) {
      this.auth.registerNewUser(this.form.value).subscribe(user => {
        if (user.name) {
          this.router.navigateByUrl('/private-room');
        }
      },
        error1 => this.info.reportMessage2(JSON.stringify(error1.error)));
    }
  }
}
