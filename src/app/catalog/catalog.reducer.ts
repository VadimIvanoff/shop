import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ProductImage} from '../models/product-image';
import {CatalogActions, CatalogActionTypes} from './catalog.actions';


export interface SmallImagesState extends EntityState<ProductImage> {
}

export function selectImageId(i: ProductImage) {
  // В качестве id использовать productId
  return i.productId;
}

export const adapter: EntityAdapter<ProductImage> = createEntityAdapter<ProductImage>({
  selectId: selectImageId
});

const initialState: SmallImagesState = adapter.getInitialState();
export function smallImagesReducer(state = initialState, action: CatalogActions): SmallImagesState {
  switch (action.type) {

    case CatalogActionTypes.SmallImageLoaded:
      // console.log(action.payload.image);
      return adapter.addOne(action.payload.image, state);
      break;
    default:
      return state;
  }
}

