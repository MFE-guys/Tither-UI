import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="relative bg-emerald-800">
      <div class="max-w-8xl mx-auto">
        <div class="flex flex-row items-center py-4 px-4">
          <span class="text-white font-bold">TITHER</span>
        </div>
      </div>
    </header>
  `,
  styles: [``]
})
export class HeaderComponent {}
