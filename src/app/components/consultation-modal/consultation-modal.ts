import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SiteStateService } from '../../services/site-state';
import { PRACTICE_AREAS, OFFICES } from '../../data/martand-data';

@Component({
  selector: 'app-consultation-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consultation-modal.html',
  styleUrls: ['./consultation-modal.css']
})
export class ConsultationModalComponent {
  protected readonly state = inject(SiteStateService);
  readonly practiceAreas = PRACTICE_AREAS;
  readonly offices = OFFICES;

  fullName = '';
  company = '';
  email = '';
  phone = '';
  practiceArea = '';
  officeCity = 'Hyderabad';
  preferredDate = '';
  preferredTime = 'Morning (10:00 AM - 1:00 PM)';
  notes = '';
  consentAccepted = false;
  isSubmitting = signal(false);

  close(): void {
    this.state.closeConsultation();
  }

  onSubmit(): void {
    if (!this.fullName || !this.email || !this.phone || !this.consentAccepted) {
      this.state.showToast('Please fill all required fields and accept the privacy policy.');
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.state.closeConsultation();
      this.state.showToast('Your consultation request has been sent to office@martandlegal.in. We will respond within 24 hours.');
      this.resetForm();
    }, 700);
  }

  private resetForm(): void {
    this.fullName = '';
    this.company = '';
    this.email = '';
    this.phone = '';
    this.notes = '';
    this.consentAccepted = false;
  }
}

