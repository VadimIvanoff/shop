import { Action } from '@ngrx/store';
import {ProductImage} from '../models/product-image';

export enum CatalogActionTypes {
  SmallImageRequested = '[Product Card] Small Image Requested',
  SmallImageLoaded = '[Products API] Small Image Loaded',
  BigImageRequested = '[Product Details] Big Image Requested',
  BigImageLoaded = '[Products API] Big Image Loaded'
}

export class SmallImageRequested implements Action {
  readonly type = CatalogActionTypes.SmallImageRequested;
  constructor(public payload: {productId: number}) {}
}
export class SmallImageLoaded implements Action {
  readonly type = CatalogActionTypes.SmallImageLoaded;
  constructor(public payload: {image: ProductImage}) {}
}
export class BigImageRequested implements Action {
  readonly type = CatalogActionTypes.BigImageRequested;
  constructor(public payload: {productId: number}) {}
}
export class BigImageLoaded implements Action {
  readonly type = CatalogActionTypes.BigImageLoaded;
  constructor(public payload: {image: ProductImage}) {}
}
export type CatalogActions = SmallImageRequested | SmallImageLoaded
  | BigImageRequested | BigImageLoaded;
