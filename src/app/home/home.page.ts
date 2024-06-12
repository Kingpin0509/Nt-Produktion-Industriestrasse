import {
  Component,
  ElementRef,
  ViewChildren,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonCard,
  IonCardContent,
  IonButton, IonIcon } from '@ionic/angular/standalone';
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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, 
    IonButton,
    IonCardContent,
    IonCard,
    IonFooter,
    IonCol,
    IonRow,
    IonGrid,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage implements AfterViewInit {
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) {}
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(10000)
      .iterations(Infinity)
      .direction('alternate')
      //.fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      //.fromTo('opacity', '1', '0.2');
      //  .keyframes([
      //    { offset: 0, width: '80px' },
      //    { offset: 0.72, width: 'var(--width)' },
      //    { offset: 1, width: '240px' },
      //  ]);
      .keyframes([
        { offset: 0, transform: 'scale(1.1)', opacity: '1' },
        { offset: 0.2, transform: 'scale(1)', opacity: '0.25' },
        { offset: 0.3, opacity: '0.8' },
        { offset: 0.4, transform: 'scale(1.05)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.6, transform: 'scale(1.05)', opacity: '1' },
        { offset: 0.7, opacity: '0.8' },
        { offset: 0.8, transform: 'scale(1)', opacity: '0.25'},
        { offset: 1, transform: 'scale(1.1)', opacity: '1'  },
      ]);
  }
  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }
}
