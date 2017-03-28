import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouter } from './AppRouter.module';

import {  } from '@angular/router';

import { AppComponent } from '../Components/app.component';
import { LoginComponent } from '../Components/login.component';
import { MenuComponent } from '../Components/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
