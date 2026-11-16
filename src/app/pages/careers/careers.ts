import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SiteStateService } from '../../services/site-state';
import { PRACTICE_AREAS, OFFICES } from '../../data/martand-data';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './careers.html',
  styleUrls: ['./careers.css']
})
export class CareersComponent {
  protected readonly state = inject(SiteStateService);
  readonly practiceAreas = PRACTICE_AREAS;
  readonly offices = OFFICES;

  fullName = '';
  email = '';
  mobile = '';
  applyingFor = 'Recruitment';
  yearOfQualification = '';
  preferredPeriod = '';
  preferredPractice = '';
  preferredOffice = 'Hyderabad';
  coverLetter = '';
  uploadedFileName = signal<string | null>(null);
  consentAccepted = false;
  isSubmitting = signal(false);

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFileName.set(input.files[0].name);
    }
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.uploadedFileName.set(event.dataTransfer.files[0].name);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onSubmit(): void {
    if (!this.fullName || !this.email || !this.mobile || !this.consentAccepted) {
      this.state.showToast('Please fill all mandatory fields and accept the privacy policy.');
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.state.showToast('Your application has been received and forwarded to careers@martandlegal.in.');
      this.resetForm();
    }, 800);
  }

  private resetForm(): void {
    this.fullName = '';
    this.email = '';
    this.mobile = '';
    this.yearOfQualification = '';
    this.preferredPeriod = '';
    this.coverLetter = '';
    this.uploadedFileName.set(null);
    this.consentAccepted = false;
  }
}

