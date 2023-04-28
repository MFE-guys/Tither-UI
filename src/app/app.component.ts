import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { HeaderComponent } from './components/Header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ButtonModule],
  template: `<app-header />`
})
export class AppComponent {}
