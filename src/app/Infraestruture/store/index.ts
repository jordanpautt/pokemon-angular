import * as fromAuth from './auth/auth.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'App Reducers'
);

export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };
