import {
  readAllPokemonSuccess,
  readAllPokemonFailure,
  readAllPokemon
} from './../pokemons/pokemons.actions';
import {
  readOnePokemon,
  readOnePokemonSuccess,
  readOnePokemonFailure
} from './../pokemon/pokemon.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SpinnerLoad } from 'src/app/UI/hooks/spinner.hooks';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpinnerEffects {
  spinnerOn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(readAllPokemon, readOnePokemon),
        tap(() => this.spinner.show('main-spinner'))
      ),
    { dispatch: false }
  );

  spinnerOff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          readAllPokemonSuccess,
          readAllPokemonFailure,
          readOnePokemonSuccess,
          readOnePokemonFailure
        ),
        tap(() => this.spinner.hide('main-spinner'))
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions, private spinner: SpinnerLoad) {}
}
