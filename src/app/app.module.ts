import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-templates/main-frame/main-frame.component';
import {MaterialModule} from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './main-templates/page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoriesMenuComponent } from './main-templates/categories-menu/categories-menu.component';
import { FooterComponent } from './main-templates/footer/footer.component';
import { TopToolbarComponent } from './main-templates/top-toolbar/top-toolbar.component';
import { FiltersComponent } from './catalog/filters/filters.component';
import { SortingComponent } from './catalog/sorting/sorting.component';
import { LoginComponent } from './authentication/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './authentication/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NotificationComponent } from './main-templates/notification/notification.component';
import { CartComponent } from './main-templates/cart/cart.component';

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
    SortingComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    NotificationComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
