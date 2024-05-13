import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { MedicalHistoryComponent } from '../medical-history/medical-history.component';
import { LifeStyleComponent } from '../life-style/life-style.component';
import { MedicationsComponent } from '../medications/medications.component';

type FormConfig = {
    [key: string]: { component: any; header: string };
};

const formConfigs: FormConfig = {
    'personal': { component: PersonalDetailsComponent, header: 'Personal Details' },
    'medical': { component: MedicalHistoryComponent, header: 'Medical History' },
    'lifestyle': { component: LifeStyleComponent, header: 'Life Style' },
    'medication': { component: MedicationsComponent, header: 'Medications' }
};

export function getComponentConfig(formName: string) {
    return formConfigs[formName];
}
