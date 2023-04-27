import { Component } from '@angular/core';

import { HeaderComponent } from './components/Header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  template: `<app-header />`
})
export class AppComponent {}
