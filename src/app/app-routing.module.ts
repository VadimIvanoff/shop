import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainFrameComponent} from './main-templates/main-frame/main-frame.component';
import {PageNotFoundComponent} from './main-templates/page-not-found/page-not-found.component';
import {TestComponent} from './test/test.component';
import {CatalogComponent} from './catalog/catalog.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';

const routes: Routes = [
  {
    path: '', component: MainFrameComponent, children: [
      {path: '', component: TestComponent},
      {path: 'test', component: TestComponent},
      {path: 'catalog', component: CatalogComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
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
