import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Product} from '../../models/product';
import {ProductInfoService} from '../../services/product-info.service';
import {first, take} from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private getInfo: ProductInfoService) {
  }

  ngOnInit() {
    this.products$ = this.getInfo.getProducts();
    this.getInfo.makeProductsRequest();
  }

}
