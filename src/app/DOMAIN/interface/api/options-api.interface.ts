export interface IOptionApi {
  path: string;
  body?: any;
  param?: number | string;
  method: 'get' | 'post' | 'delete' | 'put';
  query?: any;
}
