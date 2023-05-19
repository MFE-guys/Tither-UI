import { CurrencyPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';

import { ChartModule } from 'primeng/chart';

import { Incoming, Expense, Amount } from '../../model/enum/card.enum';
import { CardType } from '../../model/interface/card.interface';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, NgClass, ChartModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="card flex align-items-center justify-content-around scalein animation-duration-1000"
    >
    <div class="flex align-items-center gap-3">
      <div [ngClass]="'bg-'+configs()?.color" class="border-circle">
        <i [ngClass]="configs()?.icon" class="pi p-2 text-0"></i>
      </div>
      <div class="py-2 flex flex-column">
        <span class="mb-2 text-sm text-600">{{ label }}</span>
        <span class="font-bold text-3xl">{{ value | currency }}</span>
      </div>
    </div>

    <p-chart class="max-w-30-per" type="line" [data]="data" [options]="options" />
    </div>
  `,
})
export class CardComponent implements OnInit, AfterViewInit{
  @ViewChild('cardComponent', { static: true }) cardComponent!: ElementRef;

  @Input() label: string = 'card';
  @Input() value: number = 0;
  @Input() type?: string;
  @Input() transactions: number[] = [];

  cardConfig = [Incoming, Expense, Amount];
  configs = signal<CardType | undefined>(Incoming);

  data?: any;
  options?: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.configs.set(this.cardConfig.find(config => config.type === this.type));
  }

  ngAfterViewInit(): void {
    // TODO: Timeout for emulate loading
    setTimeout(() => {
      this.chartConfig();
      this.changeDetectorRef.detectChanges();
    }, 1);
  }

  chartConfig(): void {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: this.transactions,
          fill: false,
          borderColor: documentStyle.getPropertyValue(`--${this.configs()?.color}`),
          tension: 0.5
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio:  4,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0
        }
      }
    };
  }
}
