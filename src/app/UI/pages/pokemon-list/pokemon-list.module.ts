import { ComponentModule } from './../../components/component.module';
import { PokemonsEffects } from './../../../Infraestruture/store/pokemons/pokemons.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromPokemons from 'src/app/Infraestruture/store/pokemons/pokemons.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [CommonModule, ComponentModule]
})
export class PokemonListModule {}
