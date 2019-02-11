import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import {MaterialModule} from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductCardComponent } from './product-card/product-card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { FooterComponent } from './footer/footer.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { FiltersComponent } from './filters/filters.component';
import { SortingComponent } from './sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFrameComponent,
    PageNotFoundComponent,
    TestComponent,
    ProductCardComponent,
    CatalogComponent,
    CategoriesMenuComponent,
    FooterComponent,
    TopToolbarComponent,
    FiltersComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
