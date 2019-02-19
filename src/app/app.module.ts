import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainFrameComponent} from './main-templates/main-frame/main-frame.component';
import {MaterialModule} from './feature-modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageNotFoundComponent} from './main-templates/page-not-found/page-not-found.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {CategoriesMenuComponent} from './main-templates/categories-menu/categories-menu.component';
import {FooterComponent} from './main-templates/footer/footer.component';
import {TopToolbarComponent} from './main-templates/top-toolbar/top-toolbar.component';
import {HttpClientModule} from '@angular/common/http';
import {NotificationComponent} from './main-templates/notification/notification.component';
import {CartComponent} from './main-templates/cart/cart.component';
import {CheckoutComponent} from './main-templates/checkout/checkout.component';
import {DeliveryFormComponent} from './main-templates/delivery-form/delivery-form.component';
import {PrivateRoomComponent} from './main-templates/private-room/private-room.component';
import {EffectsModule} from '@ngrx/effects';
import {AuthModule} from './authentication/auth.module';
import {CatalogModule} from './catalog/catalog.module';
import {FiltersComponent} from './main-templates/filters/filters.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainFrameComponent,
    FiltersComponent,
    PageNotFoundComponent,
    CategoriesMenuComponent,
    FooterComponent,
    TopToolbarComponent,
    NotificationComponent,
    CartComponent,
    CheckoutComponent,
    DeliveryFormComponent,
    PrivateRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    AuthModule,
    CatalogModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
