import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CardComponent} from "./index";
import {NgIconsModule, provideIcons} from "@ng-icons/core";
import {heroArrowSmallDown, heroArrowSmallUp, heroBanknotes} from "@ng-icons/heroicons/outline";


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>

  const usedIcons = { heroArrowSmallUp, heroArrowSmallDown, heroBanknotes  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardComponent,
        NgIconsModule.withIcons(usedIcons),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('Should called component', () => {
    // ASSERT
    expect(component).toBeTruthy();
  });
});
