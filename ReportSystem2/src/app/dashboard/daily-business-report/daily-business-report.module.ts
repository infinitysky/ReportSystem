import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyBusinessReportRoutingModule } from './daily-business-report-routing.module';
import { DailyBusinessReportComponent } from './daily-business-report.component';

@NgModule({
  imports: [
    CommonModule,
    DailyBusinessReportRoutingModule
  ],
  declarations: [DailyBusinessReportComponent]
})
export class DailyBusinessReportModule { }
