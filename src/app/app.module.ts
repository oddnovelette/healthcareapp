import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './overall/services/auth.service';
import {UserService} from './overall/services/user.service';
import {HttpModule} from '@angular/http';
import {HealthappModule} from './healthapp/healthapp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthModule,
    AppRoutingModule,
    HttpModule,
    HealthappModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
