import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.css'
})
export class DataViewComponent {
  @Input() fullData!: { heading: string; data: any; }[];

  constructor() { }

  generateColumns(index: number) {
    let columns: any[] = [];
    console.log(this.fullData);
    switch (index) {
      case 1:
        columns = [
          { header: 'Medical Condition', field: 'name' },
          { header: 'Affected', field: 'value' },
          { header: 'Person Affected', field: 'personAffected' },
          { header: 'Remarks', field: 'remarks' },
        ]
        break;
      case 2:
        columns = [
          { header: 'Case', field: 'question' },
          { header: 'Following', field: 'value' },
          { header: 'Frequency', field: 'frequency' }
        ]
        break;
      case 3:
        columns = [
          { header: 'Medical Condition', field: 'name' },
          { header: 'Following Medication', field: 'value' },
          { header: 'Medication Name', field: 'medicationName' },
          { header: 'Dosage', field: 'dosage' }
        ]
        break;
    }


    return columns;
  }
}
