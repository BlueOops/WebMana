import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { WebpageComponent } from './webpage/webpage.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'webpage' , component : WebpageComponent},
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebmanaRoutingModule { }
