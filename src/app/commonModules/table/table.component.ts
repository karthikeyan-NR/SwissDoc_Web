import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { showCheckBox, showColumnSelection } from './table.helper';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: []
})
export class TableComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() loading = false;
  @Input() key: any;
  @Input() footerKey: any;
  @Input() columns: any;
  @Input() tableData: any;
  
  _selectedColumns: any[] = [];
  showCheckBox: boolean = false;
  showColumnSelection: boolean = false;

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.columns.filter((col: any) => val.includes(col));
  }

  ngOnInit() {    
    this._selectedColumns = this.columns;
    this.showCheckBox = showCheckBox[this.key];
    this.showColumnSelection = showColumnSelection[this.key];
  }

  ngOnDestroy() {


  }


}
