import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard.component';

// import {DailyBusinessReportModule} from './daily-business-report/daily-business-report.module';
// import {SalesStatisticsModule} from './sales-statistics/sales-statistics.module';
// import {OrderDetailsModule} from './order-details/order-details.module';
// import {HourlySalesStatisticsModule} from './hourly-sales-statistics/hourly-sales-statistics.module';
// import {UpdateDataModule} from './update-data/update-data.module';
// import {BackupDataModule} from './backup-data/backup-data.module';
//import {BlankpageModule} from './blankpage/blankpage.module';
const routes: Routes = [
  {path:'',component:DashboardComponent,
    children:[





      { path: 'DailyBusinessReport',loadChildren:'./daily-business-report/daily-business-report.module#DailyBusinessReportModule'},
      { path: 'SalesStatistics',loadChildren:'./sales-statistics/sales-statistics.module#SalesStatisticsModule'},
      { path: 'OrderDetails',loadChildren:'./order-details/order-details.module#OrderDetailsModule'},
      { path: 'HourlySales',loadChildren:'./hourly-sales-statistics/hourly-sales-statistics.module#HourlySalesStatisticsModule'},
      { path: 'SynchronizingData',loadChildren:'./update-data/update-data.module#UpdateDataModule'},
      { path: 'BackupData',loadChildren:'./backup-data/backup-data.module#BackupDataModule'},
      { path: 'BlankPage',loadChildren:'./blankpage/blankpage.module#BlankpageModule'},
    ]
  },
  // { path: 'home',loadChildren:'./home/home.module#HomeModule'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
