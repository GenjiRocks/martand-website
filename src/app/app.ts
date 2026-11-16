import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
export class App {
  title = 'Martand Legal Advisors';
}
