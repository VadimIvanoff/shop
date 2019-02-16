import { Component, OnInit } from '@angular/core';
import {CartState} from '../../models/cart-state';
import {CartService} from '../../services/cart.service';
import {DeliveryAddress} from '../../models/delivery-address';

@Component({
  selector: 'app-private-room',
  templateUrl: './private-room.component.html',
  styleUrls: ['./private-room.component.css']
})
export class PrivateRoomComponent implements OnInit {

  showDeliveryForm = false;
  cartState: CartState;
  constructor(private cart: CartService) { }

  ngOnInit() {
    console.log(this.cart.getCartState());
    this.cartState = this.cart.getCartState();
    this.showDeliveryForm = this.cartState.delivery;
  }

  hideForm(address: DeliveryAddress) {
    // console.log(event);
    this.cartState = {...this.cartState, deliveryAddress: address};
    this.showDeliveryForm = false;
  }

  saveAndSend() {
    localStorage.setItem('cartState', JSON.stringify(this.cartState));
    localStorage.removeItem('products');
  }
}
