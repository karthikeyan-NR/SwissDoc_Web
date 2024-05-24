import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Inference, HeartRate } from '../common/models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private heartRateSubject = new BehaviorSubject<HeartRate[]>([]);
  heartRate$ = this.heartRateSubject.asObservable();

  private heartRateInferenceSubject = new BehaviorSubject<Inference[]>([]);
  heartRateInference$ = this.heartRateInferenceSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchHeartRateData(timeId: string): Observable<HeartRate[]> {
    return this.http.get<any>(`https://onehermes.net/api/getHeartRate/${timeId}`).pipe(
      map(response => response.heartRate)
    );
  }

  setHeartRate(data: HeartRate[]): void {
    this.heartRateSubject.next(data);
  }

  fetchHeartRateInference(): Observable<Inference[]> {
    return this.http.get<any>(`https://onehermes.net/api/inference`)
  }

  prepareChartData(chartType: string): { chartData: any, chartOptions: any } {
    let heartRateData: any[] = [];
    this.heartRate$.subscribe(data => heartRateData = data)

    let chartPoints: any[] = [];
    let xLabel = '';
    let yLabel = '';

    switch (chartType) {
      case 'Poincare':
        chartPoints = heartRateData.map(item => ({
          x: item.timeDifference,
          y: item.prevTimeDifference
        }));
        xLabel = 'Current Time Difference(ms)';
        yLabel = 'Previous Time Difference(ms)';
        break;

      case 'Tachogram':
        chartPoints = heartRateData.map(item => ({
          x: new Date(item.time),
          y: item.bpm
        }));
        xLabel = 'Time(s)';
        yLabel = 'BPM';
        break;
    }

    const chartData = {
      datasets: [{
        label: chartType,
        data: chartPoints,
        backgroundColor: 'blue',
        borderWidth: 1,
        pointRadius: 3,
        borderColor: 'black',
        tension: 0.6
      }]
    };

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
            stepSize: chartType === 'Tachogram' ? 5000 : 200,
            callback: chartType === 'Tachogram' ? (value: number) => {
              const date = new Date(value);
              const minutes = date.getMinutes();
              const seconds = minutes * 60 + date.getSeconds();
              return seconds;
            } : (value: number) => value // Default callback for other chart types
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
            stepSize: chartType === 'Tachogram' ? 5 : 200,  // Add step size for y-axis
          }
        }
      }
    };


    return { chartData, chartOptions };
  }
}
