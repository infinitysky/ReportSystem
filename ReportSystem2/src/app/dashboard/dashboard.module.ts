import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SidebarComponent} from '../shared/menu/sidebar/sidebar.component';
import {TopnavComponent} from '../shared/menu/topnav/topnav.component';


import {BlankpageModule}from './blankpage/blankpage.module';
import {SalesStatisticsModule}from './sales-statistics/sales-statistics.module';
import {PeriodBusinessReportModule} from './period-business-report/period-business-report.module';
import {OrderDetailsModule} from './order-details/order-details.module';
import {HourlySalesStatisticsModule}from './hourly-sales-statistics/hourly-sales-statistics.module';
import {UpdateDataModule}from './update-data/update-data.module';
import {BackupDataModule}from './backup-data/backup-data.module';





@NgModule({
  imports: [

    CommonModule,
    DashboardRoutingModule,




    //developed module
    BackupDataModule,
    UpdateDataModule,
    HourlySalesStatisticsModule,
    OrderDetailsModule,
    PeriodBusinessReportModule,
    SalesStatisticsModule,
    BlankpageModule
  ],
  declarations: [DashboardComponent,SidebarComponent,TopnavComponent],
 // exports: [DashboardComponent, TopnavComponent, SidebarComponent]
})
export class DashboardModule { }
