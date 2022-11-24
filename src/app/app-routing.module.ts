import { BindingUniComponent } from './binding/binding-uni/binding-uni.component';
import { BindingBiComponent } from './binding/binding-bi/binding-bi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemprefvarComponent } from './temprefvar/temprefvar.component';
import { DirestrutsComponent } from './direstruts/direstruts/direstruts.component';

const routes: Routes = [
  { path: 'binding-bi', component: BindingBiComponent},
  { path: 'binding-uni', component: BindingUniComponent},
  { path: 'temprefvar', component: TemprefvarComponent},
  { path: 'direstruts', component:DirestrutsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
