import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterControlComponent } from './router-control.component';

const routesChildren: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: PokemonListComponent,
    loadChildren: () =>
      import('./pokemon-list/pokemon-list.module').then(
        (m) => m.PokemonListModule
      )
  },
  {
    path: 'pokemon-details/:id',
    component: PokemonDetailsComponent,
    loadChildren: () =>
      import('./pokemon-details/pokemon-details.module').then(
        (m) => m.PokemonDetailsModule
      )
  }
];

const routes: Routes = [
  {
    path: '',
    component: RouterControlComponent,
    children: routesChildren
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterControlRoutingModule {}
