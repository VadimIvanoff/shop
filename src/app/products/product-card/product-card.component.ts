import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {GetProductInfoService} from '../../services/get-product-info.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  private img$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor(private getInfo: GetProductInfoService) { }

  ngOnInit() {
    this.getImage().subscribe(() => {
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
  productDetails(): void {}
}
