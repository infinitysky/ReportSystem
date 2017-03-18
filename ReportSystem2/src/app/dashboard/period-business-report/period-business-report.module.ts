import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodBusinessReportRoutingModule } from './period-business-report-routing.module';
import { PeriodBusinessReportComponent } from './period-business-report.component';

@NgModule({
  imports: [
    CommonModule,
    PeriodBusinessReportRoutingModule
  ],
  declarations: [PeriodBusinessReportComponent]
})
export class PeriodBusinessReportModule { }
