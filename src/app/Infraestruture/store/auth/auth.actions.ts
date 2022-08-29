import { createAction, props } from '@ngrx/store';
import { ILoginUser } from 'src/app/DOMAIN/interface/api/user.interface';

export const loginUser = createAction(
  '[Auth Component] Auth User',
  props<{ auth: ILoginUser }>()
);

export const loginUserSuccess = createAction(
  '[Auth Component] Auth User Success',
  props<{ auth: ILoginUser }>()
);

export const loginUserFailure = createAction(
  '[Auth Component] Auth User Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth Component] Logout User');

export const browserReload = createAction(
  '[Auth Component] Browser Reload',
  props<{ auth: ILoginUser }>()
);
