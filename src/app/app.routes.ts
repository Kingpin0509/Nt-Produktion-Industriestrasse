import { Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
    {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then((m) => m.LoginPage),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
