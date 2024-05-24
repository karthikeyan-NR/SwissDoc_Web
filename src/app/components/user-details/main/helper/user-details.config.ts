import { user_details_URI } from "src/assets/component/images/image.data-uri";

export const menuConfigs = [
    { formName: 'personal', label: 'Personal Details', imgUrl: user_details_URI.personal_details },
    { formName: 'medical', label: 'Medical History', imgUrl: user_details_URI.medical_history },
    { formName: 'lifestyle', label: 'Life Style', imgUrl: user_details_URI.lifestyle },
    { formName: 'medication', label: 'Medications', imgUrl: user_details_URI.medications }
];

export const dropDownOptions = [
    { label: 'Self', value: 'self' },
    { label: 'Father', value: 'father' },
    { label: 'Mother', value: 'mother' },
    { label: 'Siblings', value: 'siblings' },
    { label: 'Grandparents', value: 'grandparents' }
];
