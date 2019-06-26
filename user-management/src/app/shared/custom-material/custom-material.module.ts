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
  MatSidenavModule, MatGridListModule, MatRadioModule, MatSelectModule
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
    MatSelectModule
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
    MatSelectModule
  ]
})
export class CustomMaterialModule { }
