import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CatalogActionTypes, SmallImageLoaded, SmallImageRequested} from './catalog.actions';
import {map, mergeMap} from 'rxjs/operators';
import {ProductInfoService} from '../services/product-info.service';
import {Observable} from 'rxjs';
import {ProductImage, RawImage} from '../models/product-image';


@Injectable()
export class SmallImagesEffects {

  private productId: number;
  @Effect()
  loadImage$ = this.actions$.pipe(
    ofType<SmallImageRequested>(CatalogActionTypes.SmallImageRequested),
    mergeMap(action => {
      this.productId = action.payload.productId;
      return this.productsService.getSmallImage(action.payload.productId);
    }),
    mergeMap(rawImage => {
      return this.createImage(rawImage);
    }),
    map((image64: RawImage) => {
      const img: ProductImage = {productId: image64.productId, content: image64.content,
        name: image64.productId + '_small.jpeg', type: 'small'};
      return new SmallImageLoaded({image: img});
    })
  );

  constructor(private actions$: Actions, private productsService: ProductInfoService) {
  }

  createImage(image: RawImage): Observable<RawImage> {
    const myObservabel = Observable.create(observer => {
        const reader = new FileReader();
        reader.onload = () => {
          return observer.next({content: reader.result, productId: image.productId});
        };
        reader.readAsDataURL(image.content);
      }
    );
    return myObservabel;
  }
}
