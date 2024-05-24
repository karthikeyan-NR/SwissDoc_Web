import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonalDetailsComponent } from './main/personal-details/personal-details.component';
import { MedicalHistoryComponent } from './main/medical-history/medical-history.component';
import { LifeStyleComponent } from './main/life-style/life-style.component';
import { MedicationsComponent } from './main/medications/medications.component';
import { FormModalComponent } from './main/common/form-modal/form-modal.component';

import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';

import { MainComponent } from './main/main.component';
import { CustomDialogService } from './main/helper/custom-dialog.service';
import { CustomToggleButtonComponent } from './main/common/custom-toggle-button/custom-toggle-button.component';
import { SelectButtonComponent } from './main/common/select-button/select-button.component';
import { DropdownComponent } from './main/common/dropdown/dropdown.component';
import { MenuGroupComponent } from './main/common/menu-group/menu-group.component';
import { DataViewComponent } from './main/common/data-view/data-view.component';
import { AllTableModule } from 'src/app/commonModules/table/table.Module';
import { ProfilePanelModule } from 'src/app/commonModules/profile-panel/profile-panel.module';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  declarations: [
    MainComponent,
    MenuGroupComponent,
    PersonalDetailsComponent,
    MedicalHistoryComponent,
    LifeStyleComponent,
    MedicationsComponent,
    FormModalComponent,
    CustomToggleButtonComponent,
    SelectButtonComponent,
    DropdownComponent,
    DataViewComponent
  ],
  imports: [
    CommonModule,
    ProfilePanelModule,
    DynamicDialogModule,
    DialogModule,
    ButtonModule,
    TooltipModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    SelectButtonModule,
    CheckboxModule,
    ListboxModule,
    CardModule,
    TabViewModule,
    AllTableModule,
    ToggleButtonModule,
    PanelModule,
    AvatarModule,
    MenuModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DialogService,
    DynamicDialogConfig,
    DynamicDialogRef,
    CustomDialogService
  ],
  exports: [RouterModule]
})
export class UserDetailsModule { }
