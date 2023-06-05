import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  template: `
    <div [ngClass]="hidden ? 'hidden' : ''">
      <div
        class="card test z-1 flex right-0 py-2 block absolute"
        style="top: 3.5rem; min-width: 8rem; max-width: 900px;"
      >
        <div class="flex flex-wrap text-center p-3 gap-3">
          <div
            style=""
            class="w-7rem flex flex-column align-items-center wrapper"
          >
            <p-button
              styleClass="p-ripple p-element p-button-rounded mb-2 p-button p-component p-button-icon-only"
              icon="pi pi-sun"
            />
            <span class="text-600 text-test">Resgistering Decimate</span>
          </div>

          <div style="" class="w-7rem flex flex-column align-items-center">
            <p-button
              styleClass="p-ripple p-element p-button-rounded mb-2 p-button p-component p-button-icon-only"
              icon="pi pi-moon"
            />
            <span class="text-600">Update Decimate</span>
          </div>
          <div style="" class="w-7rem flex flex-column align-items-center">
            <p-button
              styleClass="p-ripple p-element p-button-rounded mb-2 p-button p-component p-button-icon-only"
              icon="pi pi-moon"
            />
            <span class="text-600">Update Decimate</span>
          </div>
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
      .test {
        margin-top: 16px;
        margin-right: 28px;
        max-height: calc(-65px + 100vh);
      }

      .wrapper {
        width: 20px;
      }
    `
  ]
})
export class DropdownMenuComponent {
  @Input({ required: true }) hidden?: boolean;
}
