import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserDataService } from '../../user-data.service';
import { LifeStyle } from '../model/user-details.model';

interface DropdownOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-life-style',
  templateUrl: './life-style.component.html',
  styleUrls: ['./life-style.component.css']
})
export class LifeStyleComponent {

  lifeStyleData!: LifeStyle[];

  questionInfo: { [key: string]: string } = {
    'smoke': "Smoking behavior encompasses the use of tobacco products, including cigarettes, cigars, or pipes, which can lead to addiction and pose serious health risks.",
    'exercise': "Regular exercise for at least 30 minutes a day promotes cardiovascular health, boosts mood, and contributes to overall well-being.",
    'eatHealthy': "Eating healthy involves consuming a balanced diet rich in fruits, vegetables, lean proteins, whole grains, and healthy fats, while limiting processed foods, sugar, and excessive salt intake."
  }

  selectButtonOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];

  dropdownOptions: { [key: string]: DropdownOption[] } = {
    smoke: [
      { label: 'Daily', value: 'Daily' },
      { label: 'Occasionally', value: 'Occasionally' },
      { label: 'Quit', value: 'Quit' }
    ],
    exercise: [
      { label: 'Daily', value: 'Daily' },
      { label: 'Weekly', value: 'Weekly' },
      { label: 'Rarely', value: 'Rarely' }
    ],
    eatHealthy: [
      { label: 'Always', value: 'Always' },
      { label: 'Sometimes', value: 'Sometimes' },
      { label: 'Rarely', value: 'Rarely' }
    ]
  };

  constructor(private ref: DynamicDialogRef, private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.initializeLifeStyleData();
  }

  private initializeLifeStyleData(): void {
    this.lifeStyleData = this.userDataService.getLifeStyle();
  }

  questionValueChange(selectedOption: boolean, index: number) {
    this.lifeStyleData[index].value = selectedOption;
  }

  dropdownValueChange(selectedOption: any, index: number) {
    this.lifeStyleData[index].frequency = selectedOption;
  }

  onSave() {
    this.userDataService.updateLifeStyle(this.lifeStyleData);
    this.ref.close();
  }
}