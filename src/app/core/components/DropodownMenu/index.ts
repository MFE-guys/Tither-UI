import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ButtonModule, NgClass],
  template: `
    <!-- [ngClass]="false ? 'hidden' : ''" -->
    <div
      class="card z-1 flex right-0 absolute py-2"
      style="top: 3.5rem; min-width: 5rem; max-width: 500px;"
    >
      <div class="flex flex-wrap text-center">
        <div
          style=""
          class="min-w-4 w-7rem flex flex-column align-items-center p-3"
        >
          <p-button
            styleClass="p-ripple p-element p-button-rounded mb-2 p-button p-component p-button-icon-only"
            icon="pi pi-sun"
          />
          <span class="text-600">Resgistering Decimate</span>
        </div>

        <div
          style=""
          class="min-w-4 w-7rem flex flex-column align-items-center p-3"
        >
          <p-button
            styleClass="p-ripple p-element p-button-rounded mb-2 p-button p-component p-button-icon-only"
            icon="pi pi-moon"
          />
          <span class="text-600">Update Decimate</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .layout-bar {
        top: 3.25rem;
        transform-origin: top;
      }
    `
  ]
})
export class DropdownMenuComponent {}
