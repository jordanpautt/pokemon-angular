import { ComponentModule } from './../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterControlRoutingModule } from './router-control-routing.module';
import { RouterControlComponent } from './router-control.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PokemonsEffects } from 'src/app/Infraestruture/store/pokemons/pokemons.effects';
import * as fromPokemons from 'src/app/Infraestruture/store/pokemons/pokemons.reducer';

@NgModule({
  declarations: [RouterControlComponent],
  imports: [
    CommonModule,
    RouterControlRoutingModule,
    ComponentModule,
    StoreModule.forFeature(
      fromPokemons.pokemonsFeatureKey,
      fromPokemons.reducer
    ),
    EffectsModule.forFeature([PokemonsEffects])
  ]
})
export class RouterControlModule {}
