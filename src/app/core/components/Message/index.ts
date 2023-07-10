import { Component, inject } from '@angular/core';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-message',
  standalone: true,
  template: `
    <p-toast
      [showTransformOptions]="'translateY(100%)'"
      [showTransitionOptions]="'350ms'"
      [hideTransitionOptions]="'400ms'"
      [showTransformOptions]="'translateX(100%)'"
    />
  `,
  imports: [ToastModule],
  providers: [MessageService]
})
export class MessageComponent {
  private messageService = inject(MessageService);

  success(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Saved'
    });
  }

  failed(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Data not saved'
    });
  }
}
