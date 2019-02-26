import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SmallImagesState} from './catalog.reducer';

export const selectImagesState = createFeatureSelector<SmallImagesState>('smallImages');

export const selectSmallImgByProductId = (prodId: number) => createSelector(
  selectImagesState,
  imagesState => imagesState.entities[prodId]
);
