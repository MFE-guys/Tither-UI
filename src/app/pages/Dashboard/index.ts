import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

import { CardComponent } from '../../core/components/Card/index';

@Component({
  selector: 'page-dashboard',
  standalone: true,
  imports: [CardComponent, NgForOf],
  template: `
    <div>
      <span class="font-bold">Dashboard</span>
      <div class="grid gap-3 mt-3">
        <app-card
          *ngFor="let card of cardConfig"
          class="col min-w-max "
          [label]="card.title"
          [value]="card.value"
          [type]="card.type"
        />
      </div>
    </div>
  `
})
export class DashboardPage {
  cardConfig = [
    { title: 'Incoming', value: 150, type: 'incoming' },
    { title: 'Expenses', value: 50, type: 'expense' },
    { title: 'Amount', value: 100, type: 'amount' }
  ];
}
