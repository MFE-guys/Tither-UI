import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  RegisterMemberActions,
  RegisteredMemberApiActions
} from 'src/app/store/actions/register-member.actions';
import { registerMemberSelector } from 'src/app/store/reducers/register-member.reducer';
import { RegisterMemberRequiredProps } from 'src/app/core/model/interface/register-member.interface';
import { RegisterMemberService } from 'src/app/core/services/register-member.service';
import { MessageComponent } from 'src/app/core/components/Message';
import { MessageActions } from 'src/app/store/actions/message.actions';

import { Observable, first } from 'rxjs';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { Store, select } from '@ngrx/store';
interface MemberTypeModel {
  name: string;
  value: string;
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
    ButtonModule,
    MessageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <app-message #MessageComponent />

    <div class="card shadow-2">
      <form
        [formGroup]="formGroup"
        (ngSubmit)="onSubmit(formGroup)"
        class="grid formgrid p-fluid py-3"
      >
        <div class="field col-12 mb-4 flex flex-wrap">
          <label for="username" htmlFor="username" class="font-medium text-900"
            >Username
            <small
              id="username-help"
              [ngClass]="
                formGroup.get('userName')?.invalid
                  ? 'text-red-500'
                  : 'text-green-500'
              "
            >
              *
            </small>
          </label>
          <div class="p-input-icon-left ">
            <i class="pi pi-user"></i>
            <input
              pInputText
              id="username"
              class="p-inputtext p-component p-element"
              formControlName="userName"
            />
          </div>
        </div>

        <div class="field col-12 mb-4 lg:col-9 md:col-9 sm:col-7">
          <label for="email" htmlFor="email" class="font-medium text-900">
            Email
            <small
              id="email-help"
              [ngClass]="
                formGroup.get('email')?.invalid
                  ? 'text-red-500'
                  : 'text-green-500'
              "
            >
              *
            </small>
          </label>
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
          <label for="phone" htmlFor="phone" class="font-medium text-900">
            Phone
            <small
              id="phone-help"
              [ngClass]="
                formGroup.get('phone')?.invalid
                  ? 'text-red-500'
                  : 'text-green-500'
              "
            >
              *
            </small>
          </label>
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
          >
            Type
            <small
              id="type-help"
              [ngClass]="
                formGroup.get('type')?.invalid
                  ? 'text-red-500'
                  : 'text-green-500'
              "
            >
              *
            </small>
          </label>
          <p-dropdown
            [options]="memberType"
            class="p-element p-inputwrapper"
            placeholder="Select type"
            formControlName="type"
            optionLabel="name"
          />
        </div>

        <div class="field mb-4 col-12 lg:col-3 md:col-3 sm:col-6">
          <label for="status" htmlFor="status" class="font-medium text-900"
            >Status</label
          >
          <p-selectButton
            [options]="statusOptions"
            formControlName="status"
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
          class="flex justify-content-center mt-4 col-12 sm:justify-content-end"
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
    <div>
      {{ test | async }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  @ViewChild('MessageComponent') messageComponent?: MessageComponent;

  private fb = inject(FormBuilder);
  private store = inject(Store<RegisterMemberRequiredProps>);
  private registerMemberService = inject(RegisterMemberService);

  test?: Observable<RegisterMemberRequiredProps>;

  formGroup!: FormGroup;
  userName!: string;
  type!: MemberTypeModel;
  email!: string;
  phone!: string;
  historic!: string;

  statusOptions: StatusOptionsModel[] = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' }
  ];

  memberType!: MemberTypeModel[];

  ngOnInit(): void {
    this.clearFormValue();
    this.configFormValues();

    this.store.pipe(select(registerMemberSelector)).subscribe(value => {
      console.log(value);
    });
  }

  configFormValues(): void {
    this.formGroup = this.fb.group({
      userName: ['', Validators.required],
      type: [this.memberType, Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      status: ['active'],
      historic: ['']
    });

    this.memberType = [
      { name: 'Decimate', value: 'decimate' },
      { name: 'Provider', value: 'provider' }
    ];
  }

  onSubmit(registerMemberProps: FormGroup): void {
    const { userName, type, phone, status, email, historic } =
      registerMemberProps.value;
    const formValue = {
      userName: userName,
      type: type.value,
      phone: phone,
      status: status,
      email: email,
      historic: historic
    };

    this.store.dispatch(
      RegisterMemberActions.registerMemberAdded({ register: formValue })
    );

    this.registerMemberService
      .registerMember(formValue)
      .pipe(first())
      .subscribe({
        next: member => {
          this.clearFormValue();

          this.store.dispatch(
            MessageActions.sendMessage({
              message: {
                severity: 'Success',
                detail: 'Member registered with success'
              }
            })
          );

          this.store.dispatch(
            RegisteredMemberApiActions.registeredMemberAdded({
              register: member
            })
          );
        },
        error: err => {
          console.log('*** err', err.message);
          this.store.dispatch(
            MessageActions.sendMessage({
              message: {
                severity: 'Error',
                detail: err.message
              }
            })
          );
        }
      });
  }

  clearFormValue(): void {
    this.store.dispatch(RegisterMemberActions.enter());
  }
}
