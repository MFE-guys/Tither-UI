import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Constants } from 'src/app/utils/constants';
import { ThemeService } from 'src/app/core/services/theme.service';

import { ButtonModule } from 'primeng/button';
import { select, Store } from '@ngrx/store';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';

import { DropdownMenuComponent } from '../DropodownMenu';

const { dark, light } = Constants.theme;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    DropdownMenuComponent
  ],
  template: `
    <header class="w-80rem m-auto relative">
      <div class="flex justify-content-between align-items-center py-4 px-4">
        <div class="flex flex-row align-items-center text-xl gap-1">
          <i class="pi pi-wallet text-primary font-bold"></i>
          <span class="font-bold">TITHER</span>
        </div>

        <div class="flex justify-content-between align-items-center gap-1">
          <div>
            <p-button
              styleClass="p-button-rounded p-button-text"
              icon="pi pi-table"
              (onClick)="handleOpenMenu()"
            />
            <app-dropdown-menu [hidden]="openMenu()" [routes]="routes" />
          </div>

          <p-button
            styleClass="p-button-rounded p-button-text"
            [icon]="check() ? 'pi pi-sun' : 'pi pi-moon'"
            (onClick)="changeTheme()"
          />
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  private themeService = inject(ThemeService);
  private storeTheme = inject(Store<{ theme: string }>);

  theme?: string;
  themeKey = 'theme';

  check = signal<boolean>(false);
  openMenu = signal<boolean>(true);

  initialTheme = signal<string>(light);
  items!: MenuItem[];
  routes = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10, 10, 10, 101, 23];

  ngOnInit(): void {
    this.themeService.startedTheme(this.themeKey);

    this.storeTheme.pipe(select(this.themeKey)).subscribe(value => {
      this.theme = value;
      if (value === dark) this.check.update(() => true);
    });
  }

  changeTheme(): void {
    this.check.update(() => !this.check());

    this.theme = this.check() ? dark : light;

    this.themeService.themeEffect(this.themeKey, this.theme);
  }

  handleOpenMenu(): void {
    this.openMenu.update(() => !this.openMenu());
    console.log(this.openMenu());
  }
}
