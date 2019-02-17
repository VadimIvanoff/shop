import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainFrameComponent} from './main-templates/main-frame/main-frame.component';
import {PageNotFoundComponent} from './main-templates/page-not-found/page-not-found.component';
import {CatalogComponent} from './catalog/catalog.component';
import {CartComponent} from './main-templates/cart/cart.component';
import {CheckoutComponent} from './main-templates/checkout/checkout.component';
import {PrivateRoomComponent} from './main-templates/private-room/private-room.component';

const routes: Routes = [
  {
    path: '', component: MainFrameComponent, children: [
      {path: '', component: CatalogComponent},
      {path: 'catalog', component: CatalogComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'private-room', component: PrivateRoomComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
