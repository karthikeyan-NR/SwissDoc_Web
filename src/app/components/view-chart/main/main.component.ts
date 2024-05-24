import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HeartRate } from '../heart-rate.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  chartData!: any;
  chartOptions!: any;
  showChart = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchHeartRateData().subscribe({
      next: (data: HeartRate[]) => {
        this.dataService.setHeartRate(data);
        this.showChart = true;
      },
      error: (error) => {
        console.error('Error fetching heart rate data:', error);
      }
    });
  }
}
