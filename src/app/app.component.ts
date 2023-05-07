import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

import { HeaderComponent } from './components/Header';
import {ThemeService} from "./theme.service";
import {ButtonModule} from "primeng/button";



// @ts-ignore
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ButtonModule
  ],
  standalone: true,
  template: `
    <app-header />
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
