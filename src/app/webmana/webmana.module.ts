import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { WebmanaRoutingModule } from './webmana-routing.module';
import { MenuComponent } from './menu/menu.component';
import { WmAsideComponent } from './wm-aside/wm-aside.component';
import { WebpageComponent } from './webpage/webpage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WebmanaRoutingModule,
    NgbModule
  ],
  declarations: [MenuComponent, WmAsideComponent, WebpageComponent]
})
export class WebmanaModule { }
