import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComparePasswords} from '../comparePasswords';
import {NewUser} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  registerErrors: string[] = [];
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

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
      this.auth.registerNewUser(this.form.value).subscribe(result => {
        if (result) {
          console.log(result);
          // this.router.navigateByUrl('/private-room');
        }
      });
    }
  }
}
