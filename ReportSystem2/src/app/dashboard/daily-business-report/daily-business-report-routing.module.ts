import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DailyBusinessReportComponent}from './daily-business-report.component';
const routes: Routes = [
  {path:'' ,component:DailyBusinessReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyBusinessReportRoutingModule { }
