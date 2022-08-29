import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { ILoginUser } from 'src/app/DOMAIN/interface/api/user.interface';

export const authFeatureKey = 'auth';
export interface State {
  auth: ILoginUser | null;
  error: any;
}

export const initialState: State = {
  auth: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(
    AuthActions.loginUserSuccess,
    AuthActions.browserReload,
    (state, action) => ({
      ...state,
      auth: action.auth,
      error: null
    })
  ),

  on(AuthActions.loginUserFailure, (state, action) => ({
    ...state,
    auth: null,
    error: action.error
  })),

  on(AuthActions.logout, (state, action) => ({
    auth: null,
    error: null
  }))
);
