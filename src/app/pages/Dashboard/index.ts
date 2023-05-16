import { NgForOf } from '@angular/common';
import { CardComponent } from './../../components/Card/index';
import { Component } from "@angular/core";

@Component({
  selector: 'page-dashboard',
  standalone: true,
  imports: [CardComponent, NgForOf],
  template: `
    <div>
      <span class="font-bold">Dashboard</span>
      <div class="grid gap-3">
        <app-card
          *ngFor="let card of cardMock"
          class="col min-w-max mt-3"
          [label]="card.title"
          [value]="card.value"
        />
      </div>
    </div>
  `
})

export class DashboardPage{
  cardMock = [
    { title: 'Incoming', value: 150 },
    { title: 'Expenses', value: 50 },
    { title: 'Amount', value: 100 },
  ]
}
