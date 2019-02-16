import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {BehaviorSubject, Observable} from 'rxjs';
import {InfoServiceService} from './info-service.service';
import {MatBottomSheet} from '@angular/material';
import {NotificationComponent} from '../main-templates/notification/notification.component';
import {CartState} from '../models/cart-state';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productCounter: BehaviorSubject<number> = new BehaviorSubject(0);
  private products: Product[] = [];
  private cartState: CartState;

  constructor(private info: InfoServiceService, private bottomSheet: MatBottomSheet) {
    const getStorage = JSON.parse(localStorage.getItem('products'));
    this.products = getStorage ? getStorage : [];
    this.productCounter.next(this.products.length);
  }
  addProduct(product: Product) {
    this.products.push(product);
    this.productCounter.next(this.products.length);
    this.info.reportMessage('Товар был добавлен в корзину.');
    console.log(this.products);
    this.productCounter.asObservable().subscribe(msg => this.openBottomSheet('Товар был добавлен в корзину.'));
    this.closeBottomSheet(2000);
    this.saveToLocalStore(this.products);
  }
  removeProduct(id: number): void {
    const findItem = this.products.findIndex(p => p.id === id);
    this.products.splice(findItem, 1);
    this.saveToLocalStore(this.products);
    this.productCounter.next(this.products.length);
    console.log(this.products);
    this.productCounter.asObservable().subscribe(msg => this.openBottomSheet('Товар был удален из корзины.'));
    this.closeBottomSheet(2000);
  }
  getCart(): Product[] {
    return this.products;
  }
  getCount(): Observable<number> {
    return this.productCounter.asObservable();
  }
  openBottomSheet(msg: string): void {
    this.bottomSheet.open(NotificationComponent, {
      data: msg
    });
  }
  closeBottomSheet(delay: number): void {
    setTimeout(() => this.bottomSheet.dismiss(), delay);
  }
  getCartState() {
    return this.cartState;
  }
  setCartState(state: CartState) {
    this.cartState = {...state, products: this.products};
  }
  saveToLocalStore(products: Product[]) {
    localStorage.clear();
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
