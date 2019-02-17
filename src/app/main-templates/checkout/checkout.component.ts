import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  register = true;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    // console.log(this.auth.loggedIn);
    if (this.auth.loggedIn) {
      this.router.navigateByUrl('private-room');
    }
  }

}
