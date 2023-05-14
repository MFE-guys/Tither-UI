import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

import { HeaderComponent } from './components/Header';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ButtonModule],
  standalone: true,
  template: `
    <main class="card">
      <app-header />
    </main>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
