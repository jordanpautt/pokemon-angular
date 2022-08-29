import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Observable<boolean | undefined> {
    return this.authService.isAuth().pipe(
      tap((state) => {
        if (!state) {
          this.router.navigate(['/login']);
        }
      }),
      take(1)
    );
  }
}
