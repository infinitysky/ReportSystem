import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login',loadChildren:'./login/login.module#LoginModule'},
  { path: 'signup',loadChildren:'./signup/signup.module#SignupModule'},
  { path: 'home',loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  { path: 'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  { path:'**',loadChildren:'./login/login.module#LoginModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
