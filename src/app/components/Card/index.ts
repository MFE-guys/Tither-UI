import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

// type CardType = 'incoming' | 'expense' | 'amount';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, NgClass],
  template: `
    <div
      class="card flex align-items-center scalein animation-duration-1000 gap-3"
    >
      <div [ngClass]="iconReturn()" class="border-circle">
        <i class="pi pi-arrow-up p-3 text-0"></i>
      </div>
      <div class="py-2 flex flex-column">
        <span class="mb-2 text-sm text-600">{{ label }}</span>
        <span class="font-bold text-4xl">{{ value | currency : 'BRL' }}</span>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() label: string = 'card';
  @Input() value: number = 0;
  @Input() type: string = 'incoming';

  cardConfig = [
    { type: 'incoming', icon: 'pi-arrow-up', color: 'bg-green-500' },
    { type: 'expense', icon: 'pi-arrow-down', color: 'bg-red-500' },
    { type: 'amount', icon: 'pi-wallet', color: 'bg-blue-500' }
  ];

  iconReturn(): string {
    let icon = '';

    for (const card of this.cardConfig) {
      if (this.type === card.type) icon = card.color;
    }

    return icon;
  }
}
