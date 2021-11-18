import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoieComponent } from './apoie/apoie.component';

const routes: Routes = [
  {path: "", component: ApoieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApoieRoutingModule { }
