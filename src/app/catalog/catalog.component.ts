import {Component, OnInit} from '@angular/core';
import {GetProductInfoService} from '../services/get-product-info.service';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private getInfo: GetProductInfoService) {
  }

  ngOnInit() {
    this.products$ = this.getInfo.getProducts();
    this.getInfo.makeProductsRequest();
  }

}
