import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, Input, signal, OnInit } from '@angular/core';

import { Incoming, Expense, Amount } from '../../model/enum/card.enum';

interface TypeCard {
  type: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, NgClass],
  template: `
    <div
      class="card flex align-items-center scalein animation-duration-1000 gap-3"
    >
      <div [ngClass]="configs()?.color" class="border-circle">
        <i [ngClass]="configs()?.icon" class="pi p-3 text-0"></i>
      </div>
      <div class="py-2 flex flex-column">
        <span class="mb-2 text-sm text-600">{{ label }}</span>
        <span class="font-bold text-4xl">{{ value | currency : 'BRL' }}</span>
      </div>
    </div>
  `
})
export class CardComponent implements OnInit {
  @Input() label: string = 'card';
  @Input() value: number = 0;
  @Input() type?: string;

  cardConfig = [Incoming, Expense, Amount];

  configs = signal<TypeCard | undefined>(Incoming);

  ngOnInit(): void {
    this.configs.set(this.cardConfig.find(config => config.type === this.type));
  }
}
