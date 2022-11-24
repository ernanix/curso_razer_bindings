import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirestrutsComponent } from './direstruts/direstruts.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DirestrutsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    DirestrutsComponent
  ]
})
export class DirestrutsModule { }
