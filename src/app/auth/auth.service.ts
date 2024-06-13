import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  // constructor() {}

  // httpClient = inject(HttpClient);
  // baseUrl = 'http://localhost:3000/api';


  signup(data: any) {
    return data;
  }
  // login(data: any) {
  //   this.loggedIn = true;
  //   return data.pipe(
  //     tap((result) => {
  //       localStorage.setItem('authUser', JSON.stringify(result));
  //     })
  //   );
  // }
  // logout() {
  //   localStorage.removeItem('authUser');
  // }
  // isLoggedIn() {
  //   return localStorage.getItem('authUser') !== null;
  // }
  private loggedIn = false;

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
