import { createReducer } from '@ngrx/store';

export const authFeatureKey = 'auth';
export interface State {
  auth: any;
  error: any;
}

export const initialState: State = {
  auth: null,
  error: null
};

export const reducer = createReducer(initialState);
