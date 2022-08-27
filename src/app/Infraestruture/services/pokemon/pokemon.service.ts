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
      path: 'pokemon?limit=100'
    };

    const { url, method } = this.apiModule.runSendData(optionApi);

    return this.http.get<IPokemon>(url).pipe(
      map((data) => {
        const pokemon: IPokemonInfo[] = [];
        data.results.forEach((data) => {
          this.http
            .get(data.url)
            .subscribe(
              ({
                id,
                name,
                abilities,
                types,
                sprites,
                height,
                weight
              }: any) => {
                const abilitiesName = abilities.map((abilitiesData: any) => {
                  return abilitiesData.ability.name;
                });
                const typesName = types.map((typeData: any) => {
                  return typeData.type.name;
                });
                const pokemonData: IPokemonInfo = {
                  id,
                  name,
                  abilities: abilitiesName,
                  types: typesName,
                  img: sprites.front_default,
                  height,
                  weight
                };
                pokemon.push(pokemonData);
              }
            );
        });
        return pokemon;
      })
    );
  }

  public readOnePokemon(id: number): Observable<IPokemonInfo> {
    const optionsApi: IOptionApi = {
      method: 'get',
      path: 'pokemon',
      param: id
    };

    const { url } = this.apiModule.runSendData(optionsApi);

    return this.http.get<any>(url).pipe(
      map(({ id, name, abilities, types, sprites, height, weight }: any) => {
        const abilitiesName = abilities.map((abilitiesData: any) => {
          return abilitiesData.ability.name;
        });
        const typesName = types.map((typeData: any) => {
          return typeData.type.name;
        });
        const pokemonData: IPokemonInfo = {
          id,
          name,
          abilities: abilitiesName,
          types: typesName,
          img: sprites.front_default,
          height,
          weight
        };
        return pokemonData;
      })
    );
  }
}
