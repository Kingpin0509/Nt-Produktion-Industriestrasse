import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomePage } from './home/home.page';

import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'signup',
  //   component: SignupComponent,
  // },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
];
