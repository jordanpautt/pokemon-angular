import { PokemonDetailsComponent } from './pokemon-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../../components/component.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPokemon from 'src/app/Infraestruture/store/pokemon/pokemon.reducer';
import { PokemonEffects } from 'src/app/Infraestruture/store/pokemon/pokemon.effects';

@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [
    CommonModule,
    ComponentModule,
    StoreModule.forFeature(fromPokemon.pokemonsFeatureKey, fromPokemon.reducer),
    EffectsModule.forFeature([PokemonEffects])
  ]
})
export class PokemonDetailsModule {}
