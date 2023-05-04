import {AfterContentInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ThemeService} from "../../theme.service";

export class ThemeConfig {
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

        <div class="flex justify-content-between align-items-center gap-2">
          <p-button
            [icon] = 'theme.icon'
            styleClass="p-button-rounded"
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
  theme = new ThemeConfig()
  constructor(private themeService: ThemeService) {}

  changeTheme() {
    this.theme = new ThemeConfig();
    this.check =! this.check

    if(this.check) this.theme = { theme: 'vela-green', icon: 'pi pi-sun' }
    else this.theme = { theme: 'saga-green', icon: 'pi pi-moon' }

    this.themeService.switchTheme(this.theme.theme);
  }
}
