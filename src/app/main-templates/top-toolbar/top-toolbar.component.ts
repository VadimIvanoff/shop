import { Component, OnInit } from '@angular/core';
import {GetProductInfoService} from '../../services/get-product-info.service';
import {SearchCriteria} from '../../models/searchCriteria';
import {CartService} from '../../services/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {

  searchString: string;
  productCount: Observable<number>;
  constructor(private getInfo: GetProductInfoService, private cart: CartService) { }

  ngOnInit() {
    this.productCount = this.cart.getCount();
  }
  search() {
    const request: SearchCriteria = {type: 'search', search: this.searchString};
    this.getInfo.makeSearchRequest(request);
    this.searchString = '';
  }

  openCart() {

  }
}
