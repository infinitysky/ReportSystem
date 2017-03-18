import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HourlySalesStatisticsRoutingModule } from './hourly-sales-statistics-routing.module';
import { HourlySalesStatisticsComponent } from './hourly-sales-statistics.component';

@NgModule({
  imports: [
    CommonModule,
    HourlySalesStatisticsRoutingModule
  ],
  declarations: [HourlySalesStatisticsComponent]
})
export class HourlySalesStatisticsModule { }
