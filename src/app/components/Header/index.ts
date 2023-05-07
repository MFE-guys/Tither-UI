import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../theme.service';
import { async, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
// import { ThemeState } from 'src/app/store/reducers/theme.reducer';
// import { selectDarkTheme } from 'src/app/store/reducers';
import { darkTheme, decrement, increment, lightTheme } from 'src/app/store/actions';

class ThemeConfig {
  icon: 'pi pi-sun' | 'pi pi-moon';
  theme: 'saga-green' | 'vela-green';

  constructor() {
    this.icon = 'pi pi-moon';
    this.theme = 'saga-green';
  }
}

// @ts-ignore
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

        </div>

        <div class="flex justify-content-between align-items-center">
          <p-button
            styleClass="p-button-rounded"
            [icon]="themeConfig.icon"
            (click)="changeTheme()"
          />
        </div>
      </div>

    </header>
  `,
  styles: [``],
})
export class HeaderComponent implements OnInit {
  theme$: Observable<string>
  private themeService = inject(ThemeService);

  constructor(
    private storeTheme: Store<{ theme: string }>
  ) {
    this.theme$ = storeTheme.pipe(select('theme'))
  }

   // setTheme$: Observable<boolean>
  check = signal<boolean>(false);
  // theme$ = this.store.select(selectDarkTheme);
  themeConfig = new ThemeConfig()
  ngOnInit(): void {
    this.themeService.switchTheme(this.themeConfig.theme);
  }


  changeTheme(): void {
    this.themeConfig = new ThemeConfig();
    this.check.set(!this.check());

    // this.storeTheme.dispatch(darkTheme())

    // this.themeConfig = this.check()
    //   ? { theme: 'vela-green', icon: 'pi pi-sun' }
    //   : { theme: 'saga-green', icon: 'pi pi-moon' };

    this.check()
      ? this.storeTheme.dispatch(darkTheme())
      : this.storeTheme.dispatch(lightTheme())

    // this.themeService.switchTheme();
  }
}
