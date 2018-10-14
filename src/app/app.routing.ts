import { RouterModule, Routes } from '@angular/router';

import { ArtistaComponent } from './artista/artista.component';
import { AlbunesComponent } from './albunes/albunes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ArtistaComponent
  },
  {
    path: 'artista/:token',
    component: ArtistaComponent
  },
  {
    path: 'albunes/:id',
    component: AlbunesComponent
  },
  {
    path:'',
    redirectTo: 'artista',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [
  ArtistaComponent,
  AlbunesComponent
];