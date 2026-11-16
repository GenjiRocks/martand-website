import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SiteStateService {
  private platformId = inject(PLATFORM_ID);
  
  // Disclaimer state
  readonly isDisclaimerVisible = signal<boolean>(false);
  
  // Consultation modal state
  readonly isConsultationModalOpen = signal<boolean>(false);
  readonly preselectedPractice = signal<string>('');

  // Active toast/notification
  readonly toastMessage = signal<string | null>(null);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const accepted = localStorage.getItem('martand_disclaimer_accepted');
        if (accepted !== 'true') {
          // Open disclaimer on first visit
          setTimeout(() => this.isDisclaimerVisible.set(true), 150);
        }
      } catch (e) {
        this.isDisclaimerVisible.set(true);
      }
    }
  }

  acceptDisclaimer(): void {
    this.isDisclaimerVisible.set(false);
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem('martand_disclaimer_accepted', 'true');
      } catch (e) {}
    }
  }

  openDisclaimer(): void {
    this.isDisclaimerVisible.set(true);
  }

  closeDisclaimer(): void {
    this.isDisclaimerVisible.set(false);
  }

  openConsultation(practiceArea: string = ''): void {
    this.preselectedPractice.set(practiceArea);
    this.isConsultationModalOpen.set(true);
  }

  closeConsultation(): void {
    this.isConsultationModalOpen.set(false);
  }

  showToast(message: string): void {
    this.toastMessage.set(message);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 4500);
  }
}
