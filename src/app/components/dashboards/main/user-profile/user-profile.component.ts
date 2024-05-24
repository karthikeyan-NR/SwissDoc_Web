import { Component } from '@angular/core';
import { Message } from 'primeng/api';

interface LifeStyle {
  type: string;
  question: string;
  value: boolean;
  frequency: string;
}

interface MedicalCondition {
  name: string;
  info: string;
  value: boolean;
  personAffected: string;
  remarks: string;
}

interface PersonalDetail {
  name: string;
  age: number;
  sex: string;
}

interface Medication {
  name: string;
  value: boolean;
  info: string;
  medicationName: string;
  dosage: string
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  personalDetail: PersonalDetail | null = null;
  medicalHistory: MedicalCondition[] | null = null;
  lifeStyle: LifeStyle[] | null = null;
  medications: Medication[] | null = null;
  messages!: Message[];
  strokeScore = 1;
  cardioRiskScore = '15%';

  constructor() { }

  ngOnInit() {
    this.personalDetail = this.getFromLocalStorage<PersonalDetail>('personalDetail');
    this.medicalHistory = this.getFromLocalStorage<MedicalCondition[]>('medicalHistory');
    this.lifeStyle = this.getFromLocalStorage<LifeStyle[]>('lifeStyle');
    this.medications = this.getFromLocalStorage<Medication[]>('medications');
    this.medicalHistory = this.medicalHistory?.filter(condition => condition.value) || null;
    this.medications = this.medications?.filter(condition => condition.value) || null;
    this.lifeStyle = this.lifeStyle?.filter(condition => condition.value) || null;
    this.messages = [
      { severity: 'info', detail: `Annual Stroke Score - ${this.strokeScore}` },
      { severity: 'info', detail: `Cardio Risk Score - ${this.cardioRiskScore}` }
    ];
  }

  private getFromLocalStorage<T>(key: string): T | null {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) as T : null;
  }

}
