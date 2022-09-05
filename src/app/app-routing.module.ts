import { BindingUniComponent } from './binding/binding-uni/binding-uni.component';
import { BindingBiComponent } from './binding/binding-bi/binding-bi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'binding-bi', component: BindingBiComponent},
  { path: 'binding-uni', component: BindingUniComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
