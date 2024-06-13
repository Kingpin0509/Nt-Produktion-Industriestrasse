import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { IonTitle, IonHeader, IonContent, IonFooter, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [IonToolbar, IonFooter, IonContent, IonHeader, IonTitle, ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  authService = inject(AuthService);
  router = inject(Router);
  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
