import { Component, Inject, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

import { HeaderComponent } from './components/Header';
import { DashboardPage } from './pages/Dashboard';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DashboardPage],
  standalone: true,
  template: `
    <app-header />
    <main class="w-80rem m-auto px-4">
      <page-dashboard />
    </main>
  `
})
export class AppComponent implements OnInit {
  private primengConfig = Inject(PrimeNGConfig);

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
