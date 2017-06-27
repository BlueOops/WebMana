import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_comm/auth.guard';
import { HomeComponent, LoginComponent ,MasterComponent } from './home/index';

const routes: Routes = [
  {
    path: '', component: MasterComponent,
    children: [                                                       //有套master的放下面，沒套的放外面
      { path: '', component: HomeComponent  },
      { path: 'home', component: HomeComponent },
      // { path: 'my', component: MyComponent },
      // { path: '', redirectTo: 'forms/reactvie', pathMatch: 'full' },
      // { path: 'cards', redirectTo: '/cards/300', pathMatch: 'full' },
      // { path: 'cards/:type', component: CartComponent, canActivate:[LoginGuard] },
      // { path: 'forms/classic', component: ClassicComponent },
      // { path: 'forms/reactvie', component: ReactiveComponent },
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'webmana',
        loadChildren: './webmana/webmana.module#WebmanaModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
