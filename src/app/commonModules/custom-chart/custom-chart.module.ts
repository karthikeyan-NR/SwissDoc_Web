import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomChartComponent } from './custom-chart/custom-chart.component';
import { ChartModule } from "primeng/chart";

@NgModule({
  declarations: [
    CustomChartComponent
  ],
  imports: [
    ChartModule,
    CommonModule
  ],
  exports: [
    CustomChartComponent
  ]
})
export class CustomChartModule { }
