import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { PrimeNGConfig } from 'primeng/api';

import { HeaderComponent } from './core/components/Header';
import { DashboardPage } from './pages/Dashboard';
import { CardComponent } from './core/components/Card';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DashboardPage, CardComponent, CommonModule],
  standalone: true,
  template: `
    <div class="min-w-15rem">
      <app-header />
      <main class="w-80rem m-auto px-4">
        <page-dashboard />
      </main>
    </div>
  `
})
export class AppComponent implements OnInit {
  private primengConfig = inject(PrimeNGConfig);

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
