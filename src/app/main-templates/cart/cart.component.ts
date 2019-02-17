import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ProductDetailsComponent, ProductInfo} from '../../products/product-details/product-details.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private products: Product[];
  private total = 0;
  private delivery = false;
  constructor(private cart: CartService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.products = this.cart.getCart();
    this.products.forEach(p => {
      this.total = this.total + p.price;
    });
  }
  openPrpductDetails(prod: Product, sr: string): void {
    const prodInfo: ProductInfo = {product: prod, source: sr}
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: prodInfo
    });
  }
  checkout() {
     this.cart.setCartState({delivery: this.delivery, total: this.total});
     console.log(`set delivery in checkout`);
     this.router.navigateByUrl('checkout');
  }

}
