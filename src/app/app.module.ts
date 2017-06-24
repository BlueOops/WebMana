import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, LoginComponent ,MasterComponent } from './home/index';
import { AuthGuard } from './_comm/auth.guard';
import { Comm } from './_comm/comm';
import { UserService } from './_comm/user.service';
import { SummaryService } from './_comm/summary.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    Comm,
    UserService,
    SummaryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
