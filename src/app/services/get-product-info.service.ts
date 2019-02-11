import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Category} from '../models/category';
import {Product} from '../models/product';
import {categories} from '../fakedata/categories';
import {products} from '../fakedata/products';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductInfoService {

  categories: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(categories);
  }
  getProducts(): Observable<Product[]> {
    return of(products);
  }
}
