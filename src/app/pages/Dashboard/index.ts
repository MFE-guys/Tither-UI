import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

import { CardComponent } from '../../core/components/Card/index';

@Component({
  selector: 'page-dashboard',
  standalone: true,
  imports: [CardComponent, CommonModule, NgForOf, SpeedDialModule, ToastModule],
  template: `
    <div style="position: relative; height: 90vh" class="max-h-full">
      <p-toast />
      <span class="font-bold">Dashboard</span>
      <div class="grid gap-3 mt-3">
        <app-card
          *ngFor="let card of cardConfig"
          class="col min-w-max"
          [label]="card.title"
          [value]="card.value"
          [type]="card.type"
          [transactions]="card.transactions"
        />
      </div>
      <div class="speeddial-circle-demo">
        <p-speedDial
          [model]="items"
          [radius]="120"
          direction="up-left"
          type="quarter-circle"
          buttonClassName="p-button-success"
        />
      </div>
    </div>
  `,
  providers: [MessageService],
  styles: [
    `
      :host ::ng-deep {
        .speeddial-circle-demo {
          .p-speeddial-quarter-circle {
            &.p-speeddial-direction-up-left {
              right: 0rem;
              bottom: 3rem;
            }
          }
        }
      }
    `
  ]
})
export class DashboardPage implements OnInit {
  constructor(private messageService: MessageService) {}
  items!: MenuItem[];

  cardConfig = [
    {
      title: 'Incoming',
      value: 150,
      type: 'incoming',
      transactions: [65, 49, 78, 65, 93, 55, 90]
    },
    {
      title: 'Expenses',
      value: 50,
      type: 'expense',
      transactions: [65, 10, 67, 23, 60, 53, 82]
    },
    {
      title: 'Amount',
      value: 100,
      type: 'amount',
      transactions: [65, 59, 80, 81, 93, 55, 90]
    }
  ];

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Add',
            detail: 'Data Added'
          });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update',
            detail: 'Data Updated'
          });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Delete',
            detail: 'Data Deleted'
          });
        }
      }
    ];
  }
}
