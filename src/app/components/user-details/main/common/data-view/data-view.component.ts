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
    const firstData = this.fullData[index].data[0];

    Object.keys(firstData).forEach(key => {
      if (key !== 'info')
        columns.push({ header: key, field: key })
    });

    return columns;
  }
}
