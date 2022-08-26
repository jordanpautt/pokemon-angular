import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import * as pokemonsActions from './pokemon.actions';

@Injectable({
  providedIn: 'root'
})
export class PokemonsEffects {
  readAllPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pokemonsActions.readAllPokemon),
      concatMap(() =>
        this.prokemonService.readAllPokemon().pipe(
          map((pokemons) => {
            console.log(pokemons);

            return pokemonsActions.readAllPokemonSuccess({ pokemons });
          }),
          catchError((error) =>
            of(pokemonsActions.readAllPokemonFailure({ error }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private prokemonService: PokemonService
  ) {}
}
