import { Component, inject, signal, OnInit, effect, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';
import { darkTheme, decrement, increment, lightTheme } from 'src/app/store/actions';

import { async, Observable } from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { select, Store } from '@ngrx/store';

import { ThemeService } from '../../theme.service';

// import { ThemeState } from 'src/app/store/reducers/theme.reducer';
// import { selectDarkTheme } from 'src/app/store/reducers';

class ThemeConfig {
  icon: 'pi pi-sun' | 'pi pi-moon';
  theme: 'saga-green' | 'vela-green';

  constructor() {
    this.icon = 'pi pi-moon';
    this.theme = 'saga-green';
  }
}


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
          <p>{{theme$ | async}}</p>
          <p class="pl-3">{{theme()}}</p>
          <p class="pl-3">{{countTest()}}</p>

        </div>

        <div class="flex justify-content-between align-items-center">
          <p-button
            styleClass="p-button-rounded"
            [icon]="theme() === 'sega-green' ? 'pi pi-moon': 'pi pi-sun' "
            (click)="changeTheme()"
          />
        </div>
      </div>

    </header>
  `,
  styles: [``],
})
export class HeaderComponent implements OnInit {
  theme$: Observable<string>;
  private themeService = inject(ThemeService);
  private injector = inject(Injector);
  countTest = signal(0);

  constructor(
    private storeTheme: Store<{ theme: string }>
  ) {
    this.theme$ = this.storeTheme.pipe(select('theme'));
  }

   // setTheme$: Observable<boolean>
  check = signal<boolean>(false);
  theme = signal<string>('sega-green');

  themeConfig = new ThemeConfig();

  ngOnInit(): void {
    const storageValue = localStorage.getItem('theme');

    if(storageValue) {
      this.theme.set(storageValue);
    } else {
      this.theme$.subscribe(value => this.theme.set(value));
    }

    this.themeService.switchTheme(this.theme());
    if(this.theme() === 'vela-green') this.check.set(true);
  }

  changeTheme(): void {
    this.themeConfig = new ThemeConfig();
    this.check.set(!this.check());

    effect(() => {
      localStorage.setItem('theme', this.theme());
      this.themeService.switchTheme(this.theme());

    }, {injector: this.injector});

    this.theme$.subscribe(value => {
      this.theme.set(value);
    });

    this.check()
    ? this.storeTheme.dispatch(darkTheme())
    : this.storeTheme.dispatch(lightTheme());
  }

}
