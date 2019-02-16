import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  delivery: Observable<string>;
  register = true;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.delivery = this.activatedRoute.paramMap.pipe(
      map(params => {
        return params.get('delivery');
      })
    );
  }

}
