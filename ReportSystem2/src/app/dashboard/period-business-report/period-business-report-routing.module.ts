import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeriodBusinessReportComponent}from './period-business-report.component';
const routes: Routes = [
  {path:'',component:PeriodBusinessReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodBusinessReportRoutingModule { }
