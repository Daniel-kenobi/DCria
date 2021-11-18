import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LojaRoutingModule } from './loja-routing.module';
import { LojaComponent } from './loja/loja.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    LojaComponent
  ],
  imports: [
    CommonModule,
    LojaRoutingModule,
    MenuModule
  ]
})
export class LojaModule { }
