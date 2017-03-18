import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesStatisticsRoutingModule } from './sales-statistics-routing.module';
import { SalesStatisticsComponent } from './sales-statistics.component';

@NgModule({
  imports: [
    CommonModule,
    SalesStatisticsRoutingModule
  ],
  declarations: [SalesStatisticsComponent]
})
export class SalesStatisticsModule { }
