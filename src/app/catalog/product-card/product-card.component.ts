import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {ProductDetailsComponent, ProductInfo} from '../product-details/product-details.component';
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {selectSmallImgByProductId} from '../catalog.selectors';
import {ProductImage} from '../../models/product-image';
import {SmallImageRequested} from '../catalog.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  private img$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.store.pipe(
      select(selectSmallImgByProductId(this.product.id)),
      tap((image: ProductImage) => {
        if (image) {
          this.img$.next(image.content);
        } else {
          console.log(`Изображение не найдено в хранилище...`);
          this.store.dispatch(new SmallImageRequested({productId: this.product.id}));
        }
      })).subscribe();
  }

  openPrpductDetails(): void {
    const prodInfo: ProductInfo = {product: this.product, source: 'productCard'};
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: prodInfo
    });
  }
}
