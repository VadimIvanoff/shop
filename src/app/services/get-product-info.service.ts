import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Category} from '../models/category';
import {Product} from '../models/product';
import {categories} from '../fakedata/categories';
import {products} from '../fakedata/products';
import {map, take, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {SearchCriteria} from '../models/searchCriteria';

const api_url = 'http://localhost:5000/api/';

@Injectable({
  providedIn: 'root'
})
export class GetProductInfoService {

  categories: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products: Product[];

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {

    return this.http.get<Category[]>(api_url + 'categories');
  }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  makeProductsRequest(cat?: string) {
    let url = api_url + 'products/';
    if (cat) {
      url = api_url + 'products/category/' + cat;
    }
    this.http.get<Product[]>(url).pipe(
      tap(result => {
        this.products = result;
        // console.log(this.products);
        this.products$.next(result);
      })
    ).subscribe();
  }
  makeSearchRequest(search: SearchCriteria) {
      this.http.post<Product[]>(api_url + 'products/search', search).pipe(
        tap(result => {
          this.products = result;
          // console.log(this.products);
          this.products$.next(result);
        })
      ).subscribe();
  }
  getSmallImage(prodId: number): Observable<Blob> {
    return this.http.get(api_url + 'products/imagesmall/' + prodId, {responseType: 'blob'});
  }

  getBigImage(prodId: number): Observable<Blob> {
    return this.http.get(api_url + 'products/imagebig/' + prodId, {responseType: 'blob'});
  }

  sortProducts(order: string) {
    let result;
    switch (order) {
      case 'asc':
        // console.log(`Массив до сортировки - ${JSON.stringify(this.products)}`);
        result = this.products.sort((x, y) => x.price > y.price ? 1 : ((y.price > x.price) ? -1 : 0));
        // console.log(`Массив после сортировки - ${JSON.stringify(result)}`);
        this.products$.next(result);
        break;
      case 'desc':
        result = this.products.sort((x, y) => x.price <= y.price ? 1 : -1);
        // console.log(result);
        this.products$.next(result);
        break;
      case 'rating':
        result = this.products.sort((x, y) => x.rating <= y.rating ? 1 : -1);
        // console.log(result);
        this.products$.next(result);
        break;
      default:
        result = this.products.sort((x, y) => x.name <= y.name ? 1 : -1);
        // console.log(result);
        this.products$.next(result);
        break;
    }
  }
}
