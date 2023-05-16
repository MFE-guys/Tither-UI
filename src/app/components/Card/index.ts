import { CurrencyPipe } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="card scalein animation-duration-1000 flex align-items-center">
      <div class="border-circle p-3 mr-2 bg-green-600">
        <i class="pi pi-arrow-up"></i>
      </div>
      <div class="py-2 flex flex-column">
        <span class="mb-2 text-sm text-600">{{label}}</span>
        <span class="font-bold text-4xl">{{value | currency: 'BRL'}}</span>
      </div>
    </div>
  `
})

export class CardComponent{
  @Input() label: string = 'card';
  @Input() value: number = 0;
}
