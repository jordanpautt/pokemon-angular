import { createAction, props } from '@ngrx/store';
import { IPokemonInfo } from 'src/app/DOMAIN/interface/api';

export const readAllPokemon = createAction(
  '[Pokemons Component] Read all Pokemons'
);

export const readAllPokemonSuccess = createAction(
  '[Pokemons Component] Read all Pokemons Success',
  props<{ pokemons: IPokemonInfo[] }>()
);

export const readAllPokemonFailure = createAction(
  '[Pokemons Component] Read all Pokemons Failure',
  props<{ error: any }>()
);
