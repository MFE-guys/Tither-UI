import {AfterContentInit, ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ThemeService} from "../../theme.service";

class ThemeConfig {
  icon: string;
  theme: string;

  constructor() {
    this.icon = 'pi pi-moon';
    this.theme = 'saga-green';
  }
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ButtonModule, NgClass],
  template: `
    <header>
      <div class="w-60rem m-auto flex justify-content-between align-items-center py-4 px-4">
        <div class="flex flex-row items-center">
          <span class="font-bold">TITHER</span>
        </div>

        <div class="flex justify-content-between align-items-center">
          <p-button
            styleClass="p-button-rounded"
            [icon]='themeConfig.icon'
            (click)="changeTheme()"
          />
        </div>
      </div>
    </header>
  `,
  styles: [` `]
})
export class HeaderComponent {
  check?: boolean;
  themeConfig = new ThemeConfig();
  private themeService = inject(ThemeService)

  changeTheme(): void {
    this.check =! this.check;
    this.themeConfig = new ThemeConfig();

    this.themeConfig = this.check
       ? { theme: 'vela-green', icon: 'pi pi-sun' }
       : { theme: 'saga-green', icon: 'pi pi-moon' };
    this.themeService.switchTheme(this.themeConfig.theme);
  }
}
