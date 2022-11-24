import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemprefvarComponent } from './temprefvar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemprefvarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],exports: [
    TemprefvarComponent
  ]
})
export class TemprefvarModule { }
