import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateDataRoutingModule } from './update-data-routing.module';
import { UpdateDataComponent } from './update-data.component';

@NgModule({
  imports: [
    CommonModule,
    UpdateDataRoutingModule
  ],
  declarations: [UpdateDataComponent]
})
export class UpdateDataModule { }
