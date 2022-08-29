import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemon from './pokemon.reducer';

export const selectPokemonState = createFeatureSelector<fromPokemon.State>(
  fromPokemon.pokemonsFeatureKey
);

export const selectPokemon = createSelector(
  selectPokemonState,
  (state: fromPokemon.State) => state.pokemon != null || undefined
);
