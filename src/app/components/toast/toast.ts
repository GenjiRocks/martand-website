import { Component, inject } from '@angular/core';
import { SiteStateService } from '../../services/site-state';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    @if (state.toastMessage()) {
      <div class="toast-container">
        <div class="toast-card">
          <span class="toast-icon">✓</span>
          <span class="toast-text">{{ state.toastMessage() }}</span>
        </div>
      </div>
    }
  `,
  styles: [`
    .toast-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10000;
      animation: toastIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .toast-card {
      background-color: var(--color-navy);
      color: var(--color-white);
      padding: 14px 22px;
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 10px 25px rgba(14, 27, 46, 0.25);
      border-left: 3px solid var(--color-brass);
      font-size: 0.9375rem;
      max-width: 440px;
    }
    .toast-icon {
      color: var(--color-brass);
      font-weight: bold;
    }
    @keyframes toastIn {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `]
})
export class ToastComponent {
  protected readonly state = inject(SiteStateService);
}

