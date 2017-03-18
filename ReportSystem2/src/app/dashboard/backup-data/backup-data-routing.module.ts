import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackupDataComponent}from './backup-data.component';
const routes: Routes = [
  {path:'',component:BackupDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackupDataRoutingModule { }
