import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  medicalHistoryFormGroup!: FormGroup;

  medicalConditions = [
    { label: 'Hypertension', value: 'hypertension', info: 'You are typically considered to have hypertension if your blood pressure readings consistently measure at or above 130/80 mmHg.' },
    { label: 'Diabetes', value: 'diabetes', info: 'Diabetes is typically diagnosed if your blood sugar levels consistently measure above 126 mg/dL in fasting plasma glucose tests.' },
    { label: 'Stroke', value: 'stroke', info: 'A sudden onset of symptoms such as facial drooping, arm weakness, or speech difficulty may indicate a stroke, necessitating immediate medical attention.' },
    { label: 'Heart Failure', value: 'heartFailure', info: 'Shortness of breath, fatigue, and swelling in the legs can signal heart failure, requiring prompt evaluation by a healthcare professional.' },
    { label: 'Heart Attack', value: 'heartAttack', info: 'Chest pain or discomfort, often radiating to the arms, neck, jaw, or back, can signify a heart attack, warranting urgent medical attention.' },
    { label: 'Atrial Fibrillation', value: 'atrialFibrillation', info: 'A history of irregular heart rhythm, palpitations, or episodes of dizziness may indicate known atrial fibrillation, necessitating ongoing medical management and monitoring.' },
    { label: 'High Cholesterol', value: 'highCholesterol', info: 'High cholesterol is typically diagnosed if blood tests consistently show total cholesterol levels exceeding 200 milligrams per deciliter (mg/dL), necessitating lifestyle changes or medical treatment.' }
  ];

  personAffected = [
    { label: 'Self', value: 'Self' },
    { label: 'Father', value: 'Father' },
    { label: 'Mother', value: 'Mother' },
    { label: 'Siblings', value: 'Siblings' },
    { label: 'Grandparents', value: 'Grandparents' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.medicalHistoryFormGroup = this.fb.group({
      conditions: this.fb.array([])
    });
    this.initFormControls();
  }

  initFormControls() {
    this.medicalConditions.forEach(condition => {
      const conditionGroup = this.fb.group({
        name: [condition.value],
        condition: [false],
        personAffected: [''],
        remarks: ['']
      });
      this.conditionsArray.push(conditionGroup);
    });
  }

  get conditionsArray() {
    return this.medicalHistoryFormGroup.get('conditions') as FormArray;
  }

  toggleCondition(event:any, index: number) {
    const checked=false;
    console.log(event);
    
    if (!checked) {
      this.conditionsArray.at(index).get('personAffected')?.setValue('');
      this.conditionsArray.at(index).get('remarks')?.setValue('');
    }
  }

  submitForm() {
    const formData = this.medicalHistoryFormGroup.value;
    console.log(formData);
  }
}
