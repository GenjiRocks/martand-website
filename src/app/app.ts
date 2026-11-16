import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { DisclaimerModalComponent } from './components/disclaimer-modal/disclaimer-modal';
import { ConsultationModalComponent } from './components/consultation-modal/consultation-modal';
import { ToastComponent } from './components/toast/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    DisclaimerModalComponent,
    ConsultationModalComponent,
    ToastComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  private router = inject(Router);
  private sub?: Subscription;

  readonly title = 'Martand Legal Advisors';
  readonly isNavigating = signal<boolean>(false);
  readonly routeKey = signal<string>('');

  ngOnInit(): void {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isNavigating.set(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        if (event instanceof NavigationEnd) {
          this.routeKey.set(event.urlAfterRedirects || event.url);
        }
        // Small delay to ensure smooth progress bar completion
        setTimeout(() => {
          this.isNavigating.set(false);
        }, 180);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
