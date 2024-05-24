import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { FormModalComponent } from '../common/form-modal/form-modal.component';
import { UserDataService } from '../../user-data.service';
import { MedicalCondition } from '../model/user-details.model';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  medicalConditions!: MedicalCondition[];
  subHeading!: string;

  constructor(
    private dialogService: DialogService,
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    private userDataService: UserDataService
  ) {
    this.subHeading = this.dialogConfig.data;
  }

  ngOnInit(): void {
    this.medicalConditions = this.userDataService.getMedicalHistory();
  }

  // Toggle the condition's value and open a dialog if the condition is now true
  toggleCondition(index: number): void {
    const condition = this.medicalConditions[index];
    condition.value = !condition.value;

    if (condition.value) {
      this.openConditionDialog(condition, index);
    } else {
      this.clearConditionData(index);
    }
  }

  // Open a dialog for the specified condition
  openConditionDialog(value: any, index: number): void {
    this.medicalConditions[index].value = value;
    let condition = this.medicalConditions[index];
    this.dialogService.open(FormModalComponent, {
      header: condition.name,
      width: '35%',
      data: {
        data: { personAffected: condition.personAffected, remarks: condition.remarks },
        parent: 'medicalHistory'
      },
      transitionOptions: '1000ms cubic-bezier(0.25, 0.8, 0.25, 1)'
    }).onClose.subscribe((data) => {
      if (data) {
        this.medicalConditions[index].personAffected = data.personAffected;
        this.medicalConditions[index].remarks = data.remarks;
      }
    });
  }

  // Clear the data for a specified condition
  private clearConditionData(index: number): void {
    this.medicalConditions[index].personAffected = '';
    this.medicalConditions[index].remarks = '';
  }

  // Submit the form data
  submitForm(): void {
    this.userDataService.updateMedicalHistory(this.medicalConditions);
    this.dialogRef.close();
  }
}
