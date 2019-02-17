import {Component, OnInit} from '@angular/core';
import {CartState} from '../../models/cart-state';
import {CartService} from '../../services/cart.service';
import {DeliveryAddress} from '../../models/delivery-address';
import {Order} from '../../models/order';
import {Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';


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

  constructor(private cart: CartService) {
  }

  ngOnInit() {
    this.cartState = this.cart.getCartState();
    // console.log(this.cartState);
    this.showDeliveryForm = this.cartState.delivery;
    // console.log(this.cart.getCartState());
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
}
