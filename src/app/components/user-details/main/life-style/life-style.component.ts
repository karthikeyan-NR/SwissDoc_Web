import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-life-style',
  templateUrl: './life-style.component.html',
  styleUrls: ['./life-style.component.css']
})
export class LifeStyleComponent {
  lifestyleFormGroup!: FormGroup;

  questionInfo = {
    smoke: "Smoking behavior encompasses the use of tobacco products, including cigarettes, cigars, or pipes, which can lead to addiction and pose serious health risks.",
    exercise: "Regular exercise for at least 30 minutes a day promotes cardiovascular health, boosts mood, and contributes to overall well-being.",
    eatHealthy: "Eating healthy involves consuming a balanced diet rich in fruits, vegetables, lean proteins, whole grains, and healthy fats, while limiting processed foods, sugar, and excessive salt intake."
  }

  selectButtonOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];

  smokeOptions = ['Daily', 'Occasionally', 'Quit'];
  exerciseOptions = ['Daily', 'Weekly', 'Rarely'];
  eatHealthyOptions = ['Always', 'Sometimes', 'Rarely'];

  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) { }

  ngOnInit() {
    this.lifestyleFormGroup = this.fb.group({
      smoke: this.fb.group({
        smoke: [],
        smokeFrequency: ['']
      }),
      exercise: this.fb.group({
        exercise: [],
        exerciseFrequency: ['']
      }),
      eatHealthy: this.fb.group({
        eatHealthy: [],
        eatHealthyFrequency: ['']
      })
    });
  }

  onSave() {
    console.log(this.lifestyleFormGroup.value);
    this.ref.close();
  }
}