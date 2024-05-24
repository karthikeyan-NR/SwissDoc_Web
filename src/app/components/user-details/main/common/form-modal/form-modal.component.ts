import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { dropDownOptions } from '../../helper/user-details.config';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  dropdownOptions = dropDownOptions;
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
