import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { TopnavComponent } from './menu/topnav/topnav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [SidebarComponent, TopnavComponent]
})
export class SharedModule { }
