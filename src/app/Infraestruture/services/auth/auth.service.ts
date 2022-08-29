import { selectIsLoggedIn } from './../../store/auth/auth.selectors';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppState } from 'src/app/Infraestruture/store';
import { ApiModule } from '../../modules/api.module';
import { IOptionApi } from 'src/app/DOMAIN/interface/api';
import { ILoginUser } from 'src/app/DOMAIN/interface/api/user.interface';
import * as AuthActions from '../../store/auth/auth.actions';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private apiModule: ApiModule,
    private store: Store<AppState>
  ) {}

  login(loginData: ILoginUser): Observable<ILoginUser> {
    const optionsDataApi: IOptionApi = {
      method: 'post',
      path: 'api/pokemon',
      body: { ...loginData }
    };

    const { body, url } = this.apiModule.runSendData(optionsDataApi);

    return this.http.post<{ result: ILoginUser }>(url, body).pipe(
      map(({ result }) => {
        return result;
      })
    );
  }

  initAuthListener() {
    const token = localStorage.getItem('token') || '';
    const name = localStorage.getItem('name') || '';
    const timeToken = 1;
    if (token) {
      const dateNow: Date = new Date();
      const expirationToken: Date = new Date(timeToken);
      if (expirationToken > dateNow) {
        this.store.dispatch(
          AuthActions.browserReload({
            auth: { token, name }
          })
        );
      } else {
        this.removeDataLocalStorage();
        this.store.dispatch(AuthActions.logout());
      }
    } else {
      this.store.dispatch(AuthActions.logout());
    }
  }

  saveDataLocalStorage(authData: ILoginUser) {
    Object.entries(authData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }

  removeDataLocalStorage() {
    localStorage.clear();
  }

  isAuth(): Observable<boolean | undefined> {
    return this.store.pipe(
      select(selectIsLoggedIn),
      filter((stateAuth) => stateAuth !== undefined)
    );
  }
}
