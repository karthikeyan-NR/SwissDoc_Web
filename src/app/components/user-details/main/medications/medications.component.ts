import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormModalComponent } from '../common/form-modal/form-modal.component';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent {

  medications = [
    { label: 'Hypertension', value: false, info: 'Hypertension medications help regulate blood pressure by relaxing blood vessels or reducing blood volume.', data: {} },
    { label: 'Diabetes', value: false, info: 'Diabetes medications assist in regulating blood sugar levels by enhancing insulin function or reducing glucose production.', data: {} },
    { label: 'Cholesterol', value: false, info: 'Cholesterol medications, such as statins, work to lower LDL (bad) cholesterol levels in the blood, reducing the risk of cardiovascular disease and stroke.', data: {} },
    { label: 'Blood Thinner', value: false, info: 'Medications used to treat and prevent conditions such as deep vein thrombosis (DVT), pulmonary embolism (PE) and atrial fibrillation (AFib)', data: {} }
  ];

  constructor(private dialogService: DialogService, private dialogRef: DynamicDialogRef) { }

  toggleCondition(index: number) {
    const currentCondition = this.medications[index];
    this.medications[index].value = !currentCondition.value;
    if (currentCondition.value) {
      const ref = this.dialogService.open(FormModalComponent, {
        header: currentCondition.label,
        width: '35%',
        data: {
          data: currentCondition.data,
          parent: 'medications'
        },
        transitionOptions: '1000ms cubic-bezier(0.25, 0.8, 0.25, 1)'
      });

      ref.onClose.subscribe((data) => {
        if (data) {
          this.medications[index].data = data;
        }
      });
    } else {
      this.medications[index].data = {};
    }
  }

  submitForm() {
    console.log(this.medications);
    this.dialogRef.close();
  }


}
