import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as fromAuthActions from '../auth/auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class RouteEffects {
  goToLoginComponent$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => this.router.navigate(['/login']))
      ),
    { dispatch: false }
  );

  goToHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginUserSuccess),
        tap(() => this.router.navigate(['/home']))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
