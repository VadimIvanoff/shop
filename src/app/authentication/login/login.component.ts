import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {InfoServiceService} from '../../services/info-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService,
              private router: Router, private info: InfoServiceService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['qwe@qwe', [Validators.required, Validators.email]],
      password: ['Qwerty1!', Validators.required],
    });
  }
  login(): void {
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe(result => {
        if (result === true) {
          console.log(result);
          this.router.navigateByUrl('private-room');
        }
      },
        error1 => this.info.reportMessage2(`${JSON.stringify(error1.error)}`));
    }
  }
}
