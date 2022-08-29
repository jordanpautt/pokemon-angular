import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth/auth.service';
import * as AuthActions from './auth.actions';
import { catchError, concatMap, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginUser),
      concatMap(({ auth }) =>
        this.authService.login(auth).pipe(
          map((auth) => AuthActions.loginUserSuccess({ auth })),
          catchError((error) => of(AuthActions.loginUserFailure({ error })))
        )
      )
    )
  );

  saveDataUserLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginUserSuccess),
        tap(({ auth }) => {
          this.authService.saveDataLocalStorage(auth);
        })
      ),
    { dispatch: false }
  );

  logoutUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.authService.removeDataLocalStorage();
        })
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions, private authService: AuthService) {}
}
