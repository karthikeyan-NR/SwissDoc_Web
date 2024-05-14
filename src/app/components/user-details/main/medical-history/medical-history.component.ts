import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormModalComponent } from '../common/form-modal/form-modal.component';

interface MedicalCondition {
  label: string;
  value: boolean;
  info: string;
  data?: {
    personAffected?: string;
    remarks?: string
  }
}

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent {

  medicalConditions: MedicalCondition[] = [
    { label: 'Hypertension', value: false, info: 'You are typically considered to have hypertension if your blood pressure readings consistently measure at or above 130/80 mmHg.', data: {} },
    { label: 'Diabetes', value: false, info: 'Diabetes is typically diagnosed if your blood sugar levels consistently measure above 126 mg/dL in fasting plasma glucose tests.', data: {} },
    { label: 'Stroke', value: false, info: 'A sudden onset of symptoms such as facial drooping, arm weakness, or speech difficulty may indicate a stroke, necessitating immediate medical attention.', data: {} },
    { label: 'Heart Failure', value: false, info: 'Shortness of breath, fatigue, and swelling in the legs can signal heart failure, requiring prompt evaluation by a healthcare professional.', data: {} },
    { label: 'Heart Attack', value: false, info: 'Chest pain or discomfort, often radiating to the arms, neck, jaw, or back, can signify a heart attack, warranting urgent medical attention.', data: {} },
    { label: 'Atrial Fibrillation', value: false, info: 'A history of irregular heart rhythm, palpitations, or episodes of dizziness may indicate known atrial fibrillation, necessitating ongoing medical management and monitoring.', data: {} },
    { label: 'High Cholesterol', value: false, info: 'High cholesterol is typically diagnosed if blood tests consistently show total cholesterol levels exceeding 200 milligrams per deciliter (mg/dL), necessitating lifestyle changes or medical treatment.', data: {} }
  ];

  constructor(private dialogService: DialogService, private dialogRef: DynamicDialogRef) { }

  toggleCondition(index: number) {
    const currentCondition = this.medicalConditions[index];
    this.medicalConditions[index].value = !currentCondition.value;
    if (currentCondition.value) {
      const ref = this.dialogService.open(FormModalComponent, {
        header: currentCondition.label,
        width: '45%',
        data: {
          data: currentCondition.data,
          parent: 'medicalHistory'
        },
        transitionOptions: '1000ms cubic-bezier(0.25, 0.8, 0.25, 1)'
      });

      ref.onClose.subscribe((data) => {
        if (data) {
          this.medicalConditions[index].data = data;
        }
      });
    } else {
      this.medicalConditions[index].data = {};
    }
  }

  submitForm() {
    console.log(this.medicalConditions);
    this.dialogRef.close();
  }

}
