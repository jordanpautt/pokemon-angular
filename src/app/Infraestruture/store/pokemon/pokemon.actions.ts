import { createAction, props } from '@ngrx/store';
import { IPokemonInfo } from 'src/app/DOMAIN/interface/api';

export const readOnePokemon = createAction(
  '[Pokemon Component] Read One Pokemon',
  props<{ id: number }>()
);

export const readOnePokemonSuccess = createAction(
  '[Pokemons Component] Read One Pokemon Success',
  props<{ pokemon: IPokemonInfo }>()
);

export const readOnePokemonFailure = createAction(
  '[Pokemons Component] Read One Pokemon Failure',
  props<{ error: any }>()
);
