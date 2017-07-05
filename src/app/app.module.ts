import { WebpageService } from './_comm/webpage.service';
import { WebpageComponent } from './webmana/webpage/webpage.component';
import { MenuComponent } from './webmana/menu/menu.component';
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
import { WebMenuService } from './_comm/webmenu.service';
import { LightboxEvent, LightboxWindowRef } from 'angular2-lightbox/lightbox-event.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    Comm,
    UserService,
    SummaryService,
    WebMenuService,
    WebpageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
