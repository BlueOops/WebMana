import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_comm/user.service';
import { LoginData } from '../../_models/member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private userApi: UserService) { }

  chk: any;
  data: LoginData;
  ngOnInit() {
    this.userApi.checkLogin().subscribe(data => this.chk = data);


  }

  doLogin() {

    this.userApi.postLogin(this.data).subscribe(data => this.chk = data);

  }
}
