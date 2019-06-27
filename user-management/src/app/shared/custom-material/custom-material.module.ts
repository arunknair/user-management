import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatStepperModule,
  MatListModule,
  MatTableModule,
  MatSidenavModule, MatGridListModule, MatRadioModule, MatSelectModule, MatCheckboxModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class CustomMaterialModule { }
