import { BindingModule } from './binding/binding.module';
import { TemprefvarModule } from './temprefvar/temprefvar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DirestrutsModule } from './direstruts/direstruts.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BindingModule,
    FormsModule,
    TemprefvarModule,
    DirestrutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
