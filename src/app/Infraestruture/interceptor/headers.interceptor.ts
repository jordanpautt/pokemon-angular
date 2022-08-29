import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersInterceptor implements HttpInterceptor {
  token = '';

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tokenLocalStorage = localStorage.getItem('token');
    this.token = !tokenLocalStorage ? ' ' : tokenLocalStorage;

    const tokenizedRq = req.clone({
      setHeaders: {
        Accept: '*/*',
        Authorization: `Bearer ${this.token}`,
        'content-Type': `application/json`
      }
    });

    return next.handle(tokenizedRq);
  }
}
