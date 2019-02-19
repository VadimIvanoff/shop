import {Component, OnInit} from '@angular/core';
import {CartState} from '../../models/cart-state';
import {CartService} from '../../services/cart.service';
import {DeliveryAddress} from '../../models/delivery-address';
import {Order} from '../../models/order';
import {noop, Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {LogoutAction} from '../../authentication/auth-actions.actions';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-private-room',
  templateUrl: './private-room.component.html',
  styleUrls: ['./private-room.component.css']
})
export class PrivateRoomComponent implements OnInit {

  orders: Observable<Order[]>;
  showDeliveryForm = false;
  cartState: CartState;
  address: string;

  constructor(private cart: CartService, private store: Store, private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
    this.cartState = this.cart.getCartState();
    this.showDeliveryForm = this.cartState.delivery;
    this.orders = this.cart.getOrders();
    this.cart.getOrdersFormApi().subscribe();
  }

  hideForm(address: DeliveryAddress) {
    this.address = address.town + ', ' + address.street + ', ' + address.buildingNumber;
    this.showDeliveryForm = false;
  }

  saveAndSend() {
    if (this.cartState.products.length !== 0) {
      this.cart.sendOrder(this.address).pipe(
        switchMap(order => this.cart.getOrdersFormApi())
      ).subscribe(orders => {
        this.cart.resetCart();
        this.cartState.products = [];
      });
    }
  }

  logout() {
    this.auth.logout().pipe(
      tap(() => {
        this.store.dispatch(new LogoutAction());
        this.router.navigateByUrl('/');
      })).subscribe(
      noop,
      error1 => console.log('Не удалось связаться с сервером'));
  }
}
