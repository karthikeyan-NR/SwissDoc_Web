export interface LifeStyle {
    type: string;
    question: string;
    value: boolean;
    frequency: string;
}

export interface MedicalCondition {
    name: string;
    info: string;
    value: boolean;
    personAffected: string;
    remarks: string;
}

export interface PersonalDetail {
    name: string;
    age: number;
    sex: string;
}

export interface Medication {
    name: string;
    value: boolean;
    info: string;
    medicationName: string;
    dosage: string
}