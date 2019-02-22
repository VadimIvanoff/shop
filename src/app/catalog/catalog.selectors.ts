import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ImagesState} from './catalog.reducer';

export const selectImagesState = createFeatureSelector<ImagesState>('catalog');

export const selectImageByProductId = (prodId: number) => createSelector(
  selectImagesState,
  imagesState => imagesState.entities[prodId]
);
