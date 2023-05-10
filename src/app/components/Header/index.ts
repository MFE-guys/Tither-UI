import { Component, inject, signal, OnInit, Injector, WritableSignal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { select, Store } from '@ngrx/store';

import { ThemeService } from '../../theme.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ButtonModule, NgClass, AsyncPipe],
  template: `
    <header>
      <div
        class="w-60rem m-auto flex justify-content-between align-items-center py-4 px-4"
      >
        <div class="flex flex-row items-center">
          <span class="font-bold">TITHER</span>
          <p class="pl-3">{{theme}}</p>

        </div>

        <div class="flex justify-content-between align-items-center">
          <p-button
            styleClass="p-button-rounded"
            [icon]="check() ? 'pi pi-sun' : 'pi pi-moon'"
            (click)="changeTheme()"
          />
        </div>
      </div>

    </header>
  `,
  styles: [``],
})
export class HeaderComponent implements OnInit {
  private themeService = inject(ThemeService);
  private storeTheme = inject(Store<{ theme: string }>);

  check = signal<boolean>(false);
  initialTheme = signal<string>('saga-green');

  theme: string = '';
  themeKey = 'theme'

  ngOnInit(): void {
    this.themeService.startedTheme(this.themeKey)

    this.storeTheme.pipe(select(this.themeKey))
      .subscribe((value) => {
        this.theme = value
        if(value === 'vela-green') this.check.update(() => true)
      });
  }

  changeTheme(): void {
    this.check.update(() => !this.check());

    this.theme = this.check() ? 'vela-green' : 'saga-green';

    this.themeService.switchTheme(this.themeKey, this.theme);
  }
}
