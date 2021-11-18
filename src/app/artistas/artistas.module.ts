import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistasRoutingModule } from './artistas-routing.module';
import { ArtistasComponent } from './artistas/artistas.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    ArtistasComponent
  ],
  imports: [
    CommonModule,
    ArtistasRoutingModule,
    MenuModule
  ]
})
export class ArtistasModule { }
