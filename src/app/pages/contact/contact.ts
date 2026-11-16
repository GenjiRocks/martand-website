import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SiteStateService } from '../../services/site-state';
import { PRACTICE_AREAS, OFFICES } from '../../data/martand-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  protected readonly state = inject(SiteStateService);
  readonly practiceAreas = PRACTICE_AREAS;
  readonly offices = OFFICES;

  fullName = '';
  company = '';
  email = '';
  mobile = '';
  intent = 'Book a consultation';
  practiceArea = '';
  preferredDate = '';
  preferredTime = '';
  message = '';
  consentAccepted = false;
  isSubmitting = signal(false);

  onSubmit(): void {
    if (!this.fullName || !this.email || !this.mobile || !this.message || !this.consentAccepted) {
      this.state.showToast('Please fill all required fields and accept the privacy policy.');
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.state.showToast('Your enquiry has been submitted. A team member will respond within one business day.');
      this.resetForm();
    }, 700);
  }

  private resetForm(): void {
    this.fullName = '';
    this.company = '';
    this.email = '';
    this.mobile = '';
    this.preferredDate = '';
    this.preferredTime = '';
    this.message = '';
    this.consentAccepted = false;
  }
}

