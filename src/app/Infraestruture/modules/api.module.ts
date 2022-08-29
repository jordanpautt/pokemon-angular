import { HttpParams } from '@angular/common/http';
import { IOptionApi } from './../../DOMAIN/interface/api/options-api.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiModule {
  constructor() {}

  public runSendData({ param, path, method, body, query }: IOptionApi) {
    let paramsQuery = new HttpParams();
    let queryParse: HttpParams;

    const url: string = param
      ? `${environment.hostname}/${path}/${param}`
      : `${environment.hostname}/${path}`;

    if (query) {
      this.queryParser(query, paramsQuery);
    }

    return {
      url,
      method,
      body
    };
  }

  private queryParser(
    query: Array<{ type: string; value: string }>,
    paramsQuery: HttpParams
  ): HttpParams {
    query.forEach(({ type, value }) => {
      paramsQuery = paramsQuery.append(type, value);
    });
    return paramsQuery;
  }
}
