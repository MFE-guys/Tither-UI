import { Component, inject, signal, OnInit, effect, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';
import { UpdateTheme } from 'src/app/store/actions';
import { themeType } from 'src/app/store';

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
          <p class="pl-3">{{theme()}}</p>

        </div>

        <div class="flex justify-content-between align-items-center">
          <p-button
            styleClass="p-button-rounded"
            [icon]="check() ? 'pi pi-moon': 'pi pi-sun' "
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
  private injector = inject(Injector);
  private storeTheme = inject(Store<{ theme: string }>);

  check = signal<boolean>(false);
  theme = signal<string>('saga-green');
  countTest = signal(0);

  ngOnInit(): void {
    let choice: themeType;

    this.storeTheme.pipe(select('theme'))
      .subscribe((value) => {
        const test = JSON.stringify(value);
        choice = JSON.parse(test);

        this.theme.set(choice.theme);
      });

    const storageValue = localStorage.getItem('theme');

    if(storageValue) this.theme.set(storageValue);
    if(this.theme() === 'saga-green') this.check.set(true);

    this.themeService.switchTheme(this.theme());
  }

  changeTheme(): void {
    this.check.set(!this.check());

    effect(() => {
      localStorage.setItem('theme', this.theme());
      this.themeService.switchTheme(this.theme());

    }, {injector: this.injector});

    this.check()
    ? this.storeTheme.dispatch(UpdateTheme({theme: 'saga-green'}))
    : this.storeTheme.dispatch(UpdateTheme({theme: 'vela-green'}));
  }

}
