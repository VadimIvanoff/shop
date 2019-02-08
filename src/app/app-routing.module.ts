import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainFrameComponent} from './main-frame/main-frame.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {path: '', component: MainFrameComponent},
  {path: 'test', component: TestComponent},
  {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
