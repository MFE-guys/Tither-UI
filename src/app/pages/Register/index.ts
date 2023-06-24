import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  inject
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
interface MemberTypeModel {
  name: string;
}

interface StatusOptionsModel {
  label: string;
  value: string;
}
@Component({
  selector: 'page-register',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    SelectButtonModule,
    InputTextareaModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="card shadow-2">
      <form
        [formGroup]="formGroup"
        (ngSubmit)="onSubmit(formGroup)"
        class="grid formgrid p-fluid py-3"
      >
        <div class="field col-12 mb-4 flex flex-wrap">
          <label for="username" htmlFor="username" class="font-medium text-900"
            >Username</label
          >
          <div class="p-input-icon-left ">
            <i class="pi pi-user"></i>
            <input
              pInputText
              id="username"
              class="p-inputtext p-component p-element"
              formControlName="userName"
            />
          </div>
          <small
            id="username-help"
            class="mt-2 text-red-500"
            *ngIf="
              (formGroup.get('userName')?.invalid &&
                formGroup.get('userName')?.dirty) ||
              formGroup.get('userName')?.touched
            "
          >
            *Provide your username.
          </small>
        </div>

        <div class="field col-12 mb-4 lg:col-9 md:col-9 sm:col-7">
          <label for="email" htmlFor="email" class="font-medium text-900"
            >Email</label
          >
          <div class="p-input-icon-left">
            <i class="pi pi-at"></i>
            <input
              pInputText
              id="email"
              class="p-inputtext p-component p-element"
              formControlName="email"
            />
          </div>
        </div>

        <div class="field mb-4 col-12 lg:col-3 md:col-3 sm:col-5">
          <label for="phone" htmlFor="phone" class="font-medium text-900"
            >Phone</label
          >
          <div class="p-input-icon-right">
            <i class="pi pi-phone"></i>
            <p-inputMask
              mask="(99) 99999-9999"
              formControlName="phone"
              placeholder="(88) 91234-5678"
            />
          </div>
        </div>

        <div class="field mb-4 col-12 lg:col-3 md:col-3 sm:col-6">
          <label
            for="memberType"
            htmlFor="memberType"
            class="font-medium text-900"
            >Type</label
          >
          <p-dropdown
            [options]="memberType"
            class="p-element p-inputwrapper"
            formControlName="selectedCity"
            optionLabel="name"
          />
        </div>

        <div class="field mb-4 col-12 lg:col-3 md:col-3 sm:col-6">
          <label for="status" htmlFor="status" class="font-medium text-900"
            >Status</label
          >
          <p-selectButton
            [options]="statusOptions"
            formControlName="value"
            optionLabel="label"
            optionValue="value"
          />
        </div>

        <div class="field col-12 mb-4 lg:col-6 md:col-6 sm:col-12 lg:mb-0">
          <label for="status" htmlFor="status" class="font-medium text-900"
            >Historic</label
          >
          <textarea
            rows="5"
            cols="30"
            pInputTextarea
            formControlName="historic"
            placeholder="Describe historic here"
            [autoResize]="true"
          >
          </textarea>
        </div>

        <footer
          class="flex justify-content-center mt-5 col-12 sm:justify-content-end"
        >
          <p-button
            label="Save Decimate"
            type="submit"
            [disabled]="!formGroup.valid"
            class="font-bold w-18rem lg:w-10rem md:w-10rem sm:w-10rem"
          />
        </footer>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);

  formGroup!: FormGroup;
  userName!: string;
  selectedCity!: MemberTypeModel;
  email!: string;
  phone!: string;
  historic!: string;

  statusOptions: StatusOptionsModel[] = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' }
  ];

  memberType!: MemberTypeModel[];

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userName: ['', Validators.required],
      selectedCity: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      value: ['active'],
      historic: ['']
    });

    this.memberType = [{ name: 'Decimate' }, { name: 'Provider' }];
  }

  onSubmit(form: FormGroup): void {
    console.log('***form', form.value);
  }
}
