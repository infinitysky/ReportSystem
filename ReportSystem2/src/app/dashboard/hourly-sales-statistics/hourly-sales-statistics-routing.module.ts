import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HourlySalesStatisticsComponent}from './hourly-sales-statistics.component';
const routes: Routes = [
  {path:'',component:HourlySalesStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourlySalesStatisticsRoutingModule { }
