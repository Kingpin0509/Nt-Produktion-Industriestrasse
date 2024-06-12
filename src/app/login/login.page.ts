import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  Auth,
  User,
  user,
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup,
  authState,
} from '@angular/fire/auth';
import { traceUntilFirst } from '@angular/fire/performance';
import { map, Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
    private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription!: Subscription;
  private userDisposable!: Subscription;
  showLoginButton = false;
  showLogoutButton = false;
  constructor() { }

  ngOnInit() {
  
  this.user$ = authState(this.auth);
  this.userDisposable = authState(this.auth)
    .pipe(
      traceUntilFirst('auth'),
      map((u) => !!u)
    )
    .subscribe((isLoggedIn) => {
      this.showLoginButton = !isLoggedIn;
      this.showLogoutButton = isLoggedIn;
    });
}
loginanon(): void {
  if (event) {
    event.stopPropagation();
  }
  signInAnonymously(this.auth);
}
loginvertrieb(): void {
  signInAnonymously(this.auth);
}
loginproduktion(): void {
  signInAnonymously(this.auth);
}
loginlogistik(): void {
  signInAnonymously(this.auth);
}
loginproduktionsleitung(): void {
  signInAnonymously(this.auth);
}
logintechnik(): void {
  signInAnonymously(this.auth);
}

async login() {
  return await signInWithPopup(this.auth, new GoogleAuthProvider());
}
logout() {
  this.auth.signOut();
}
}
