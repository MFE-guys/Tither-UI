import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  template: `
    <div [ngClass]="false ? 'hidden' : ''" class="">
      <div
        class="card test min-w-19rem max-w-22rem z-1 justify-content-center flex flex-wrap right-0 py-2 absolute"
      >
        <li *ngFor="let route of routes" class="text-center p-3 grid gap-3">
          <ul class="w-5rem flex flex-column align-items-center wrapper">
            <p-button
              styleClass="p-ripple p-element p-button-rounded mb-2 p-button p-component p-button-icon-only"
              icon="pi pi-sun"
            />
            <span class="text-600 text-test">Resgister</span>
          </ul>
        </li>
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
        margin-left: 28px;
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
  @Input() routes?: number[];
}
