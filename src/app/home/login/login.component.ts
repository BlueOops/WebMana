import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_comm/user.service';
import { LoginData } from '../../_models/member';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  data: LoginData;
  constructor(
    private userApi: UserService,
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    // reset login status
    //  this.authenticationService.logout();
    this.userApi.checkLogin().subscribe(res2 => {
      console.log(res2.json())
    });
  }

  login() {
    console.log('Start');
    this.loading = true;
    //this.data = { uid: "admin", pwd: "1234" };
    this.data = { uid: this.model.username, pwd: this.model.password };
    this.userApi.postLogin(this.data)
      .subscribe(
      data => {
        // this.loading = true;
          console.log(data['_body']);
        this.router.navigate(['/webmana']);

      },
      error => {
        //this.alertService.error(error);
        console.log(error);
        this.loading = false;
      });
  }
}
