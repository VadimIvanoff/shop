import { Component, OnInit } from '@angular/core';
import {GetProductInfoService} from '../../services/get-product-info.service';
import {Observable} from 'rxjs';
import {Category} from '../../models/category';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {

  categories$: Observable<Category[]>;
  allCategories$: Observable<Category[]>;
  constructor(private getInfo: GetProductInfoService) { }

  ngOnInit() {
    this.categories$ = this.getInfo.getCategories().pipe(
     map(array => array.slice(0, 5))
    );
    this.allCategories$ = this.getInfo.getCategories();
  }
  getProducts(cat?: string): void {
    // console.log(cat);
    this.getInfo.makeProductsRequest(cat);
  }
}
