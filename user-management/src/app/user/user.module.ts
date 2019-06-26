import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    AddUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
