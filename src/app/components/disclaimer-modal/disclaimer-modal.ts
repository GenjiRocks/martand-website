import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SiteStateService } from '../../services/site-state';

@Component({
  selector: 'app-disclaimer-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './disclaimer-modal.html',
  styleUrls: ['./disclaimer-modal.css']
})
export class DisclaimerModalComponent {
  protected readonly state = inject(SiteStateService);
  isAccepted = signal(false);

  onEnterWebsite(): void {
    if (this.isAccepted()) {
      this.state.acceptDisclaimer();
    }
  }
}

