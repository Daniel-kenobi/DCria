import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(x => x.HomeModule) },
  { path: 'artistas', loadChildren: () => import('./artistas/artistas.module').then(x => x.ArtistasModule) },
  { path: 'apoie', loadChildren: () => import('./apoie/apoie.module').then(x => x.ApoieModule) },
  {path: 'loja', loadChildren: () => import('./loja/loja.module').then(x => x.LojaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   