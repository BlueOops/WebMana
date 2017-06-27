import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebmanaRoutingModule } from './webmana-routing.module';
import { MenuComponent } from './menu/menu.component';
import { WmAsideComponent } from './wm-aside/wm-aside.component';

@NgModule({
  imports: [
    CommonModule,
    WebmanaRoutingModule
  ],
  declarations: [MenuComponent, WmAsideComponent]
})
export class WebmanaModule { }
