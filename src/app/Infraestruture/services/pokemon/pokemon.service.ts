import { ApiModule } from '../../modules/api.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import {
  IOptionApi,
  IPokemon,
  IPokemonInfo
} from 'src/app/DOMAIN/interface/api';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient, private apiModule: ApiModule) {}

  public readAllPokemon(): Observable<IPokemonInfo[]> {
    const optionApi: IOptionApi = {
      method: 'get',
      path: 'api/pokemon'
    };

    const { url, method } = this.apiModule.runSendData(optionApi);

    return this.http.get<{ result: IPokemonInfo[] }>(url).pipe(
      map(({ result }) => {
        return result;
      })
    );
  }

  public readOnePokemon(id: number): Observable<IPokemonInfo> {
    const optionsApi: IOptionApi = {
      method: 'get',
      path: 'api/pokemon',
      param: id
    };

    const { url } = this.apiModule.runSendData(optionsApi);

    return this.http.get<{ result: IPokemonInfo }>(url).pipe(
      map(({ result }) => {
        return result;
      })
    );
  }
}
