import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HourlySalesStatisticsRoutingModule } from './hourly-sales-statistics-routing.module';
import { HourlySalesStatisticsComponent } from './hourly-sales-statistics.component';

@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    HourlySalesStatisticsRoutingModule
  ],
  declarations: [HourlySalesStatisticsComponent]
})
export class HourlySalesStatisticsModule { }
