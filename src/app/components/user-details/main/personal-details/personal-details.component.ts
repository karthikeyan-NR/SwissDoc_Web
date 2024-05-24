import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { UserDataService } from '../../user-data.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetailsForm!: FormGroup;

  genderOptions: SelectItem[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ];

  constructor(private formBuilder: FormBuilder, private userDataService: UserDataService, private dialogRef: DynamicDialogRef) { }

  ngOnInit(): void {
    this.initializePersonalDetailsForm();
  }

  private initializePersonalDetailsForm(): void {
    const personalDetails = this.userDataService.getPersonalDetail();
    this.personalDetailsForm = this.formBuilder.group({
      name: [personalDetails?.name || '', Validators.required],
      age: [personalDetails?.age || '', Validators.required],
      sex: [personalDetails?.sex || '', Validators.required],
    });
  }


  submitForm() {
    console.log(this.personalDetailsForm.value);

    this.userDataService.updatePersonalDetail(this.personalDetailsForm.value);
    this.dialogRef.close();
  }

}
