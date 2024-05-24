import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormModalComponent } from '../common/form-modal/form-modal.component';
import { UserDataService } from '../../user-data.service';

interface Medication {
  name: string;
  value: boolean;
  info: string;
  medicationName: string;
  dosage: string;
}

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css'],
  providers: [DialogService]
})
export class MedicationsComponent implements OnInit {

  medications !: Medication[];
  subHeading!: string;

  constructor(
    private dialogService: DialogService,
    private userDataService: UserDataService,
    private dialogConfig: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef
  ) {
    this.subHeading = this.dialogConfig.data;
  }

  ngOnInit(): void {
    this.medications = this.userDataService.getMedications()
  }

  // Toggle the medication status and open dialog if selected
  toggleCondition(index: number): void {
    const medication = this.medications[index];
    medication.value = !medication.value;

    if (medication.value) {
      this.openMedicationDialog(medication, index);
    } else {
      this.clearMedicationData(index);
    }
  }

  // Open a dialog for the specified medication
  private openMedicationDialog(medication: Medication, index: number): void {
    this.dialogService.open(FormModalComponent, {
      header: medication.name,
      width: '35%',
      data: {
        data: { medicationName: medication.medicationName, dosage: medication.dosage },
        parent: 'medications',
      },
      transitionOptions: '1000ms cubic-bezier(0.25, 0.8, 0.25, 1)'
    }).onClose.subscribe((data) => {
      if (data) {
        this.medications[index].medicationName = data.medicationName;
        this.medications[index].dosage = data.dosage;
      }
    });
  }

  // Clear the data for a specified medication
  private clearMedicationData(index: number): void {
    this.medications[index].medicationName = '';
    this.medications[index].dosage = '';
  }

  // Submit the form data
  submitForm(): void {
    this.userDataService.updateMedications(this.medications);
    this.dialogRef.close();
  }
}
