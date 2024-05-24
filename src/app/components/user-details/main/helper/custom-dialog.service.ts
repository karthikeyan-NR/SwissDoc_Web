import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { MedicalHistoryComponent } from '../medical-history/medical-history.component';
import { LifeStyleComponent } from '../life-style/life-style.component';
import { MedicationsComponent } from '../medications/medications.component';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {

  dialogTransition: string = '1000ms cubic-bezier(0.25, 0.8, 0.25, 1)';

  constructor(private dialogService: DialogService) { }

  private formConfigs: { [key: string]: { component: any; header: string, subHeading?: string } } = {
    'personal': { component: PersonalDetailsComponent, header: 'Personal Details' },
    'medical': { component: MedicalHistoryComponent, header: 'Medical History', subHeading: 'Check the conditions that apply to you or any member of your immediate relatives?' },
    'lifestyle': { component: LifeStyleComponent, header: 'Life Style' },
    'medication': { component: MedicationsComponent, header: 'Medications', subHeading: 'Do you take medications for any of the following medical conditions?' }
  };

  getComponentConfig(formName: string) {
    return this.formConfigs[formName];
  }

  show(formName: string, width: string): void {
    const componentConfig = this.getComponentConfig(formName);
    if (componentConfig) {
      this.dialogService.open(componentConfig.component, {
        header: componentConfig.header,
        width: width,
        transitionOptions: this.dialogTransition,
        data: componentConfig.subHeading
      });
    }
  }
}
