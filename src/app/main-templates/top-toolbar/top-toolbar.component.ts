import {Component, OnInit} from '@angular/core';
import {ProductInfoService} from '../../services/product-info.service';
import {SearchCriteria} from '../../models/searchCriteria';
import {CartService} from '../../services/cart.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {

  searchString: string;
  productCount: Observable<number>;

  constructor(private getInfo: ProductInfoService,
              private cart: CartService,
              private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.productCount = this.cart.getCount();
  }

  search() {
    const request: SearchCriteria = {type: 'search', search: this.searchString};
    this.getInfo.makeSearchRequest(request);
    this.searchString = '';
  }

  openPrivateRoom() {
    if (this.auth.loggedIn) {
      this.router.navigateByUrl('/private-room');
    } else { this.router.navigateByUrl('checkout'); }
  }
}
