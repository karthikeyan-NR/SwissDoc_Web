import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  dropDownOptions = [
    { label: 'Self', value: 'self' },
    { label: 'Father', value: 'father' },
    { label: 'Mother', value: 'mother' },
    { label: 'Siblings', value: 'siblings' },
    { label: 'Grandparents', value: 'grandparents' }
  ];
  data: any;
  parent!: string;

  constructor(private dynamicDialogRef: DynamicDialogRef, private dynamicDialogConfig: DynamicDialogConfig) { }

  ngOnInit(): void {
    const passedData = this.dynamicDialogConfig.data;
    this.parent = passedData.parent;
    if (passedData.data && Object.keys(passedData.data).length !== 0) {
      this.data = passedData.data;
    } else {
      this.data = (this.parent === 'medications') ? { medicationName: '', dosage: '' } : { personAffected: '', remarks: '' };
    }
  }

  onSubmit() {
    this.dynamicDialogRef.close(this.data);
  }
}
