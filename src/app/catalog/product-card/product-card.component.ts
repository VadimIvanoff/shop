import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductInfoService} from '../../services/product-info.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {ProductDetailsComponent, ProductInfo} from '../product-details/product-details.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  private img$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor(private getInfo: ProductInfoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getImage().subscribe(() => {
    });

  }
  openPrpductDetails(): void {
    const prodInfo: ProductInfo = {product: this.product, source: 'productCard'}
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: prodInfo
    });
  }

  getImage(): Observable<any> {
    return this.getInfo.getSmallImage(this.product.id).pipe(
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
}
