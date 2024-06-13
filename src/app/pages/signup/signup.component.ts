import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { IonHeader, IonTitle, IonToolbar, IonFooter, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [IonContent, IonFooter, IonToolbar, IonTitle, IonHeader, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor() {}
  authService = inject(AuthService);
  router = inject(Router);
  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.signup(this.signupForm.value).subscribe({
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        error: (err: any) => console.log(err),
      });
    }
  }
}
