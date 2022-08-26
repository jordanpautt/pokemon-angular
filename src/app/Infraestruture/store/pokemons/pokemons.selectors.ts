import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemons from './pokemons.reducer';

export const selectPokemonsState = createFeatureSelector<fromPokemons.State>(
  fromPokemons.pokemonsFeatureKey
);

export const selectPokemons = createSelector(
  selectPokemonsState,
  (state: fromPokemons.State) => state.pokemons != null || undefined
);
