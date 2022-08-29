import { createReducer, on } from '@ngrx/store';

import { IPokemonInfo } from 'src/app/DOMAIN/interface/api';
import * as pokemonsActions from './pokemons.actions';

export const pokemonsFeatureKey = 'pokemons';

export interface State {
  pokemons: IPokemonInfo[];
  error: any;
}

export const initialState: State = {
  pokemons: [],
  error: null
};
export const reducer = createReducer(
  initialState,
  on(pokemonsActions.readAllPokemonSuccess, (state, { pokemons }) => {
    return {
      ...state,
      pokemons: [...pokemons],
      error: null
    };
  }),

  on(pokemonsActions.readAllPokemonFailure, (state, action) => ({
    ...state,
    error: action.error
  }))
);
