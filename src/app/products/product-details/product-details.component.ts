import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Product} from '../../models/product';
import {GetProductInfoService} from '../../services/get-product-info.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private img$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  constructor(public dialogRef: MatDialogRef<ProductDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public product: Product,
              private getInfo: GetProductInfoService,
              private cart: CartService) { }

  ngOnInit() {
    this.getImage().subscribe(() => {
    });
  }
  close(): void {
    this.dialogRef.close();
  }
  getImage(): Observable<any> {
    return this.getInfo.getBigImage(this.product.id).pipe(
      tap(blob => this.createImageFromBlob(blob))
    );
  }
  createImageFromBlob(image: Blob) {
    let img: any;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      img = reader.result;
      this.img$.next(img);
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  addToCart(): void {
    this.cart.addProduct(this.product);
    this.close();
  }
}
