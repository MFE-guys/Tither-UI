import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="text-2xl font-bold"> hello Tithe </span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
