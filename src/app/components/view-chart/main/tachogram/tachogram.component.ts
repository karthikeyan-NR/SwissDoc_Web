import { Component, Input } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-tachogram',
  templateUrl: './tachogram.component.html',
  styleUrl: './tachogram.component.scss'
})
export class TachogramComponent {
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
