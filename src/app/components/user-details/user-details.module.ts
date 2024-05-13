import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { PersonalDetailsComponent } from './main/personal-details/personal-details.component';
import { MedicalHistoryComponent } from './main/medical-history/medical-history.component';
import { LifeStyleComponent } from './main/life-style/life-style.component';
import { MedicationsComponent } from './main/medications/medications.component';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AnimateModule } from 'primeng/animate';
import { StepsModule } from 'primeng/steps';
import { UserDetailsRoutingModule } from './user-details.routing.module';

@NgModule({
  declarations: [
    MainComponent,
    PersonalDetailsComponent,
    MedicalHistoryComponent,
    LifeStyleComponent,
    MedicationsComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    DialogModule,
    ButtonModule,
    AvatarModule,
    TooltipModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    SelectButtonModule,
    CheckboxModule,
    ListboxModule,
    ToggleButtonModule,
    AnimateModule,
    StepsModule,
    ReactiveFormsModule,
    UserDetailsRoutingModule
  ]
})
export class UserDetailsModule { }
