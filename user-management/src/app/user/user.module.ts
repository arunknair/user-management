import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";

@NgModule({
  declarations: [
    AddUserComponent,
    ViewUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
