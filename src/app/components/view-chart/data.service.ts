import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeartRate } from './heart-rate.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private heartRateSubject = new BehaviorSubject<HeartRate[]>([]);
  heartRate$ = this.heartRateSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchHeartRateData(): Observable<HeartRate[]> {
    return this.http.get<any>('http://localhost:3000/api/inference').pipe(
      map(response => response.heartRate)
    );
  }

  setHeartRate(data: HeartRate[]): void {
    this.heartRateSubject.next(data);
  }

  prepareChartData(chartType: string): { chartData: any, chartOptions: any } {
    let heartRateData: any[] = [];
    this.heartRate$.subscribe(data => heartRateData = data)

    let chartPoints: any[] = [];
    let xLabel = '';
    let yLabel = '';
    console.log(heartRateData[0].time);
    
    switch (chartType) {
      case 'poincare':
        chartPoints = heartRateData.map(item => ({
          x: item.timeDifference,
          y: item.prevTimeDifference
        }));
        xLabel = 'Current Time Difference';
        yLabel = 'Previous Time Difference';
        break;

      case 'tachogram':
        chartPoints = heartRateData.map(item => ({
          x: new Date(item.time),
          y: item.bpm
        }));
        xLabel = 'Time';
        yLabel = 'BPM';
        break;
    }

    const chartData = {
      datasets: [{
        label: 'Heart Rate',
        data: chartPoints,
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 1,
        pointRadius: 3
      }]
    };
console.log(chartData.datasets[0].data);

    const chartOptions = {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: xLabel
          },
          ticks: {
            callback: chartType === 'tachogram' ? (value: number) => {
              const date = new Date(value);

              const minutes = date.getMinutes();
              const seconds = date.getSeconds();
              const milliseconds = date.getMilliseconds();
              console.log(value,date);
              

              const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
              return formattedTime;
            } : (value: number) => value.toString() // Default callback for other chart types
          }

        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: yLabel
          },
          ticks: {
            stepSize: 2000,  // Add step size for y-axis
          }
        }
      }
    };


    return { chartData, chartOptions };
  }
}
