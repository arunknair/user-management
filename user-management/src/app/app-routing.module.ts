import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';

const routes: Routes = [
  {
    path: '',
    component: AddUserComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'view-user',
    component: ViewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
