import { createReducer, on } from '@ngrx/store';

import { IPokemonInfo } from 'src/app/DOMAIN/interface/api';
import * as pokemonsActions from './pokemon.actions';

export const pokemonsFeatureKey = 'pokemons';

export interface State {
  pokemons: IPokemonInfo[] | null;
  error: any;
}

export const initialState: State = {
  pokemons: null,
  error: null
};
export const reducer = createReducer(
  initialState,
  on(pokemonsActions.readAllPokemonSuccess, (state, { pokemons }) => {
    console.log('reducer', pokemons);

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
