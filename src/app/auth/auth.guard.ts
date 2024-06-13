// import { CanActivateFn } from '@angular/router';
// import { inject } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from './auth.service';


// export const authGuard: CanActivateFn = (route, state) => {

//   const authService = inject(AuthService);
//   const router = inject(Router);

//   if (authService.isLoggedIn()) {
//     return true;
//   }
//   router.navigate(['/login']);
//   return false;

// };
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}