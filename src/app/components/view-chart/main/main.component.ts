import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HeartRate } from '../heart-rate.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  chartData!: any;
  chartOptions!: any;
  showChart = false;
  timeId: string = "1";

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.timeId = id ? id : this.timeId;
    this.dataService.fetchHeartRateData(this.timeId).subscribe({
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
