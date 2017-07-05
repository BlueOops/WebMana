import { Menu } from './../../_models/summary';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_comm/user.service';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wm-aside',
  templateUrl: './wm-aside.component.html',
  styleUrls: ['./wm-aside.component.css']
})
export class WmAsideComponent implements OnInit {

  constructor(
    private userApi: UserService,
    private route: ActivatedRoute,
    private router: Router, ) { }
  data: Menu;

  ngOnInit() {
   this.userApi.GetMenu().subscribe(res => {
      this.data = res.json();
      //console.log(res.json())
    });
  }

}
