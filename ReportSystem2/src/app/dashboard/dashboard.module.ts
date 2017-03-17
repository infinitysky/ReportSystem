import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SidebarComponent} from '../shared/menu/sidebar/sidebar.component';
import {TopnavComponent} from '../shared/menu/topnav/topnav.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent,SidebarComponent,TopnavComponent]
})
export class DashboardModule { }
