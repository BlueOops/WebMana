import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcpRoutingModule } from './ecp-routing.module';
import { ChatComponent } from './chat/chat.component';
import { EcpAsideComponent } from './ecp-aside/ecp-aside.component';

@NgModule({
  imports: [
    CommonModule,
    EcpRoutingModule
  ],
  declarations: [ChatComponent, EcpAsideComponent]
})
export class EcpModule { }
