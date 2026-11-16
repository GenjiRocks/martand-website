import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SiteStateService } from '../../services/site-state';
import { OFFICES } from '../../data/martand-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  protected readonly state = inject(SiteStateService);
  readonly offices = OFFICES;
  newsletterEmail = '';
  isSubscribed = signal(false);

  onSubscribe(): void {
    if (this.newsletterEmail && this.newsletterEmail.includes('@')) {
      this.isSubscribed.set(true);
      this.state.showToast('Thank you for subscribing to Martand Legal insights.');
      this.newsletterEmail = '';
    } else {
      this.state.showToast('Please enter a valid email address.');
    }
  }

  openDisclaimer(event: Event): void {
    event.preventDefault();
    this.state.openDisclaimer();
  }
}
