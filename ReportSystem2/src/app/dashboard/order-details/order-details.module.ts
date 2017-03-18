import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './order-details.component';

@NgModule({
  imports: [
    CommonModule,
    OrderDetailsRoutingModule
  ],
  declarations: [OrderDetailsComponent]
})
export class OrderDetailsModule { }
