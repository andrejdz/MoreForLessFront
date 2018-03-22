import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent, ItemPageComponent } from '@modules/index';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main-page',
    pathMatch: 'full'
  },
  {
    path: 'main-page',
    component: MainPageComponent
  },
  {
    path: 'item-page/:id',
    component: ItemPageComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
