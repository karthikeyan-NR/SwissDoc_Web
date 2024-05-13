import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent implements OnInit {
  medicationsForm!: FormGroup;

  medicalConditions = [
    { label: 'Hypertension', value: 'hypertension', info: 'Hypertension medications help regulate blood pressure by relaxing blood vessels or reducing blood volume.' },
    { label: 'Diabetes', value: 'diabetes', info: 'Diabetes medications assist in regulating blood sugar levels by enhancing insulin function or reducing glucose production.' },
    { label: 'Cholesterol', value: 'cholesterol', info: 'Cholesterol medications, such as statins, work to lower LDL (bad) cholesterol levels in the blood, reducing the risk of cardiovascular disease and stroke.' },
    { label: 'Blood Thinner', value: 'bloodThinner', info: 'Medications used to treat and prevent conditions such as deep vein thrombosis (DVT), pulmonary embolism (PE) and atrial fibrillation (AFib)' }
  ];

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.medicationsForm = this.fb.group({
      conditions: this.fb.array([])
    });
    this.initFormControls();
  }

  initFormControls() {
    this.medicalConditions.forEach(condition => {
      const conditionGroup = this.fb.group({
        condition: [false],
        medicationName: [condition.value],
        dosage: ['']
      });
      this.conditionsArray.push(conditionGroup);
    });
  }

  get conditionsArray() {
    return this.medicationsForm.get('conditions') as FormArray;
  }

  toggleCondition(event:any, index: number) {
    console.log(event);
    const checked=false;
    if (!checked) {
      this.conditionsArray.at(index).get('medicationName')?.setValue('');
      this.conditionsArray.at(index).get('dosage')?.setValue('');
    }
  }

  submitForm() {
    const formData = this.medicationsForm.value;
    console.log(formData);
  }


}
