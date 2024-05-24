import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrl: './custom-chart.component.scss'
})
export class CustomChartComponent implements OnInit{
  @Input() chartData: any;
  @Input() chartOptions: any;
  @Input() chartType!: string;
  ngOnInit(): void {
  }
}
