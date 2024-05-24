import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import * as _ from 'lodash';
import { MenuItem } from 'primeng/api';
import { Observable, Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

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

interface MonthlyPayment {
    name?: string;
    amount?: number;
    paid?: boolean;
    date?: string;
}

@Component({
    templateUrl: './main.dashboard.component.html',
})
export class MainDashboardComponent implements OnInit, OnDestroy {
    personalDetail: PersonalDetail | null = null;
    medicalHistory: MedicalCondition[] | null = null;
    lifeStyle: LifeStyle[] | null = null;
    medications: Medication[] | null = null;
    loading: boolean | null = null;

    constructor(
        private layoutService: LayoutService
    ) {

    }

    ngOnInit() {
        this.personalDetail = this.getFromLocalStorage<PersonalDetail>('personalDetail');
        this.medicalHistory = this.getFromLocalStorage<MedicalCondition[]>('medicalHistory');
        this.lifeStyle = this.getFromLocalStorage<LifeStyle[]>('lifeStyle');
        this.medications = this.getFromLocalStorage<Medication[]>('medications');

    }

    private getFromLocalStorage<T>(key: string): T | null {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) as T : null;
    }

    ngOnDestroy(): void {
    }
}
