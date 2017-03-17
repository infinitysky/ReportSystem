import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankpageRoutingModule } from './blankpage-routing.module';
import { BlankpageComponent } from './blankpage.component';

@NgModule({
  imports: [
    CommonModule,
    BlankpageRoutingModule
  ],
  declarations: [BlankpageComponent]
})
export class BlankpageModule { }
