import { createReducer, on } from '@ngrx/store';

import { IPokemonInfo } from 'src/app/DOMAIN/interface/api';
import * as pokemonActions from './pokemon.actions';

export const pokemonsFeatureKey = 'pokemon';

export interface State {
  pokemon: IPokemonInfo;
  error: any;
}

export const initialState: State = {
  pokemon: {
    id: 0,
    img: '',
    abilities: [],
    types: [],
    name: '',
    height: 0,
    weight: 0
  },
  error: null
};
export const reducer = createReducer(
  initialState,
  on(pokemonActions.readOnePokemonSuccess, (state, { pokemon }) => {
    return {
      ...state,
      pokemon,
      error: null
    };
  }),

  on(pokemonActions.readOnePokemonFailure, (state, action) => ({
    ...state,
    error: action.error
  }))
);
