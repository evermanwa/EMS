import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouter } from './AppRouter.module';

import { AppComponent } from '../Components/app.component';
import { LoginComponent } from '../Components/login.component';
import { MenuComponent } from '../Components/menu.component';
import { PageNotFoundComponent } from '../Components/not-found.component';

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
    MenuComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
