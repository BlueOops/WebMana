import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const routes: Routes = [
  { path: '', component: MyaccountComponent },
  { path: 'pwd', component: ChangepwdComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
