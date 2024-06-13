import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { IonHeader, IonToolbar, IonTitle, IonFooter, IonContent, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonButton, IonContent, IonFooter, IonTitle, IonToolbar, IonHeader, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}


  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //     this.authService.login(this.loginForm.value).subscribe((data: any) => {
  //       if (this.authService.isAuthenticated()) {
  //         this.router.navigate(['/admin']);
  //       }
  //       console.log(data);
  //     });
  //   }
  // }
  login() {
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
