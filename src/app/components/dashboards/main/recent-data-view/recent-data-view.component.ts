import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HeartRate, Inference } from '../../common/models/models';

@Component({
  selector: 'app-recent-data-view',
  templateUrl: './recent-data-view.component.html',
  styleUrl: './recent-data-view.component.scss'
})
export class RecentDataViewComponent implements OnInit {

  timeId: string = '4';
  showChart: boolean = false;
  showTable: boolean = false;
  chartData: any;
  chartOptions: any;
  inference!: Inference[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchHeartRateData(this.timeId).subscribe({
      next: (data) => {
        this.dataService.setHeartRate(data);
        this.showChart = true;
      },
      error: (error) => {
        console.error('Error fetching heart rate data:', error);
      }
    });
    this.dataService.fetchHeartRateInference().subscribe({
      next: (data) => {
        this.inference = data;
        this.showTable = true;
      },
      error: (error) => {
        console.error('Error fetching heart rate data:', error);
      }
    });
  }
}
