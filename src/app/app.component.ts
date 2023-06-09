import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';

import { HeaderComponent } from './core/components/Header';
import { DashboardPage } from './pages/Dashboard';
import { CardComponent } from './core/components/Card';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    DashboardPage,
    CardComponent,
    CommonModule,
    RouterOutlet,
    RouterModule
  ],
  standalone: true,
  template: `
    <div class="min-w-15rem">
      <app-header />
      <main class="w-80rem m-auto px-4">
        <router-outlet></router-outlet>
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
