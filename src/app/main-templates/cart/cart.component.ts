import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];
  total = 0;
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.products = this.cart.getCart();
    this.products.forEach(p => {
      this.total = this.total + p.price;
    });
    console.log(this.total);
  }

}
