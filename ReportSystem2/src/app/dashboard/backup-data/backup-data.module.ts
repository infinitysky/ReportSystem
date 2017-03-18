import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackupDataRoutingModule } from './backup-data-routing.module';
import { BackupDataComponent } from './backup-data.component';

@NgModule({
  imports: [
    CommonModule,
    BackupDataRoutingModule
  ],
  declarations: [BackupDataComponent]
})
export class BackupDataModule { }
