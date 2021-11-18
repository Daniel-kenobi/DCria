import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApoieRoutingModule } from './apoie-routing.module';
import { ApoieComponent } from './apoie/apoie.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    ApoieComponent,
  ],
  imports: [
    CommonModule,
    ApoieRoutingModule,
    MenuModule
  ]
})
export class ApoieModule { }
