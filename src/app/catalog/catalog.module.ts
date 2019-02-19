import { NgModule } from '@angular/core';
import {SortingComponent} from './sorting/sorting.component';
import {MaterialModule} from '../feature-modules/material.module';
import {CatalogComponent} from './catalog-component/catalog.component';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

@NgModule({
  declarations: [
    SortingComponent,
    CatalogComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CatalogModule { }
