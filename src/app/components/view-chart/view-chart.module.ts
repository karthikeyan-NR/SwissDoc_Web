import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ViewChartRoutingModule } from './view-chart-routing.module';

import { MainComponent } from './main/main.component';
import { PoincareComponent } from './main/poincare/poincare.component';
import { PpgSignalComponent } from './main/ppg-signal/ppg-signal.component';
import { TachogramComponent } from './main/tachogram/tachogram.component';
import { CustomChartModule } from 'src/app/commonModules/custom-chart/custom-chart.module';


@NgModule({
  declarations: [
    MainComponent,
    PoincareComponent,
    PpgSignalComponent,
    TachogramComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomChartModule,
    ViewChartRoutingModule
  ]
})
export class ViewChartModule { }
