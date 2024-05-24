import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../main/data.service';

@Component({
  selector: 'app-poincare',
  templateUrl: './poincare.component.html',
  styleUrl: './poincare.component.scss'
})
export class PoincareComponent implements OnInit {
  chartData: any;
  chartOptions: any;
  showChart = false;
  @Input() chartType!: string;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    const data = this.dataService.prepareChartData(this.chartType)
    this.chartData = data.chartData;
    this.chartOptions = data.chartOptions;
    this.showChart = true;
  }
}
