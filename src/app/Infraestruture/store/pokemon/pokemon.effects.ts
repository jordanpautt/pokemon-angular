import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import * as pokemonsActions from './pokemon.actions';

@Injectable({
  providedIn: 'root'
})
export class PokemonEffects {
  readAllPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pokemonsActions.readOnePokemon),
      concatMap(({ id }) =>
        this.prokemonService.readOnePokemon(id).pipe(
          map((pokemon) => {
            return pokemonsActions.readOnePokemonSuccess({ pokemon });
          }),
          catchError((error) =>
            of(pokemonsActions.readOnePokemonFailure({ error }))
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
