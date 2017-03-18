import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DashboardModule} from './dashboard/dashboard.module';
import {LoginModule}from './login/login.module';
import {SignupModule} from './signup/signup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [


    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    //Developed Module regist here
    DashboardModule,
    LoginModule,
    SignupModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
