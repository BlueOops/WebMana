import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [MyaccountComponent, ChangepwdComponent]
})
export class AccountModule { }
