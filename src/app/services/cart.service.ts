import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {BehaviorSubject, Observable} from 'rxjs';
import {InfoServiceService} from './info-service.service';
import {MatBottomSheet} from '@angular/material';
import {NotificationComponent} from '../main-templates/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productCounter: BehaviorSubject<number> = new BehaviorSubject(0);
  private products: Product[] = [];

  constructor(private info: InfoServiceService, private bottomSheet: MatBottomSheet) {
  }
  addProduct(product: Product) {
    this.products.push(product);
    this.productCounter.next(this.products.length);
    this.info.reportMessage('Товар был добавлен в корзину.');
    console.log(this.products);
    this.productCounter.asObservable().subscribe(msg => this.openBottomSheet('Товар был добавлен в корзину.'));
    this.closeBottomSheet(2000);
  }
  removeProduct(): void {
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
}
