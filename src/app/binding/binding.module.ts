import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingUniComponent } from './binding-uni/binding-uni.component';
import { BindingBiComponent } from './binding-bi/binding-bi.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BindingUniComponent,
    BindingBiComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BindingUniComponent,
    BindingBiComponent
  ]
})
export class BindingModule { }
