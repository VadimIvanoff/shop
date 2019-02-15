import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainFrameComponent} from './main-templates/main-frame/main-frame.component';
import {PageNotFoundComponent} from './main-templates/page-not-found/page-not-found.component';
import {TestComponent} from './test/test.component';
import {CatalogComponent} from './catalog/catalog.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {CartService} from './services/cart.service';
import {CartComponent} from './main-templates/cart/cart.component';

const routes: Routes = [
  {
    path: '', component: MainFrameComponent, children: [
          {path: '', component: CatalogComponent},
          {path: 'catalog', component: CatalogComponent},
          {path: 'cart', component: CartComponent}
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
