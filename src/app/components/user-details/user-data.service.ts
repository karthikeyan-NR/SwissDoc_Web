import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LifeStyle, MedicalCondition, Medication, PersonalDetail } from './main/model/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  medicalConditions: MedicalCondition[] = [
    { name: 'Hypertension', value: false, info: 'You are typically considered to have hypertension if your blood pressure readings consistently measure at or above 130/80 mmHg.', personAffected: '', remarks: '' },
    { name: 'Diabetes', value: false, info: 'Diabetes is typically diagnosed if your blood sugar levels consistently measure above 126 mg/dL in fasting plasma glucose tests.', personAffected: '', remarks: '' },
    { name: 'Stroke', value: false, info: 'A sudden onset of symptoms such as facial drooping, arm weakness, or speech difficulty may indicate a stroke, necessitating immediate medical attention.', personAffected: '', remarks: '' },
    { name: 'Heart Failure', value: false, info: 'Shortness of breath, fatigue, and swelling in the legs can signal heart failure, requiring prompt evaluation by a healthcare professional.', personAffected: '', remarks: '' },
    { name: 'Heart Attack', value: false, info: 'Chest pain or discomfort, often radiating to the arms, neck, jaw, or back, can signify a heart attack, warranting urgent medical attention.', personAffected: '', remarks: '' },
    { name: 'Atrial Fibrillation', value: false, info: 'A history of irregular heart rhythm, palpitations, or episodes of dizziness may indicate known atrial fibrillation, necessitating ongoing medical management and monitoring.', personAffected: '', remarks: '' },
    { name: 'High Cholesterol', value: false, info: 'High cholesterol is typically diagnosed if blood tests consistently show total cholesterol levels exceeding 200 milligrams per deciliter (mg/dL), necessitating lifestyle changes or medical treatment.', personAffected: '', remarks: '' }
  ];

  medications: Medication[] = [
    { name: 'Hypertension', value: false, info: 'Hypertension medications help regulate blood pressure by relaxing blood vessels or reducing blood volume.', medicationName: '', dosage: '' },
    { name: 'Diabetes', value: false, info: 'Diabetes medications assist in regulating blood sugar levels by enhancing insulin function or reducing glucose production.', medicationName: '', dosage: '' },
    { name: 'Cholesterol', value: false, info: 'Cholesterol medications, such as statins, work to lower LDL (bad) cholesterol levels in the blood, reducing the risk of cardiovascular disease and stroke.', medicationName: '', dosage: '' },
    { name: 'Blood Thinner', value: false, info: 'Medications used to treat and prevent conditions such as deep vein thrombosis (DVT), pulmonary embolism (PE) and atrial fibrillation (AFib)', medicationName: '', dosage: '' }
  ];

  lifeStyleData = [
    {
      type: 'smoke',
      question: 'Do you smoke?',
      value: false,
      frequency: '',
    },
    {
      type: 'exercise',
      question: 'Do you exercise regularly?',
      value: false,
      frequency: ''
    },
    {
      type: 'eatHealthy',
      question: 'Do you eat healthy?',
      value: false,
      frequency: ''
    }
  ]

  profile: PersonalDetail = { name: '', age: 0, sex: '' }

  loading: boolean = false;

  // BehaviorSubjects to hold user data
  private personalDetailSubject = new BehaviorSubject<PersonalDetail>(this.getFromLocalStorage('personalDetail', this.profile));
  private medicalHistorySubject = new BehaviorSubject<MedicalCondition[]>(this.getFromLocalStorage('medicalHistory', this.medicalConditions));
  private lifeStyleSubject = new BehaviorSubject<LifeStyle[]>(this.getFromLocalStorage('lifeStyle', this.lifeStyleData));
  private medicationsSubject = new BehaviorSubject<Medication[]>(this.getFromLocalStorage('medications', this.medications));
  private loadingSubject = new BehaviorSubject<boolean>(this.getFromLocalStorage('loading', this.loading));

  personalDetail$ = this.personalDetailSubject.asObservable();
  medicalHistory$ = this.medicalHistorySubject.asObservable();
  lifeStyle$ = this.lifeStyleSubject.asObservable();
  medications$ = this.medicationsSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  constructor() { }

  private getFromLocalStorage<T>(key: string, defaultValue: T): T {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  }

  private setToLocalStorage<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getPersonalDetail(): PersonalDetail {
    return this.personalDetailSubject.getValue();
  }

  getMedicalHistory(): MedicalCondition[] {
    return this.medicalHistorySubject.getValue();
  }

  getLifeStyle(): LifeStyle[] {
    return this.lifeStyleSubject.getValue();
  }

  getMedications(): Medication[] {
    return this.medicationsSubject.getValue();
  }

  getLoading(): boolean {
    return this.loadingSubject.getValue();
  }

  updatePersonalDetail(detail: PersonalDetail): void {
    this.personalDetailSubject.next(detail);
    this.setToLocalStorage('personalDetail', detail);
  }

  updateMedicalHistory(history: MedicalCondition[]): void {
    this.medicalHistorySubject.next(history);
    this.setToLocalStorage('medicalHistory', history);
  }

  updateLifeStyle(lifestyle: LifeStyle[]): void {
    this.lifeStyleSubject.next(lifestyle);
    this.setToLocalStorage('lifeStyle', lifestyle);
  }

  updateMedications(medications: Medication[]): void {
    this.medicationsSubject.next(medications);
    this.setToLocalStorage('medications', medications);
  }

  updateLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
    this.setToLocalStorage('loading', loading);
  }

  clearPersonalDetail(): void {
    this.personalDetailSubject.next(this.profile);
    this.setToLocalStorage('personalDetail', this.profile);
  }

  clearMedicalHistory(): void {
    this.medicalHistorySubject.next(this.medicalConditions);
    this.setToLocalStorage('medicalHistory', this.medicalConditions);
  }

  clearLifeStyle(): void {
    this.lifeStyleSubject.next(this.lifeStyleData);
    this.setToLocalStorage('lifeStyle', this.lifeStyleData);
  }

  clearMedications(): void {
    this.medicationsSubject.next(this.medications);
    this.setToLocalStorage('medications', this.medications);
  }
}
