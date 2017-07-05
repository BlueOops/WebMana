import { WebpageService } from './../../_comm/webpage.service';
import { Webpage, WebpageGroup } from './../../_models/summary';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {

  constructor(
    private Main: WebpageService,
    private router: Router,
    private route: ActivatedRoute) {
    this.PageTitle = "自訂網頁";
    this.initModel();

  }

  PageType: string = '';//Group=自訂網頁群組;info=自訂網頁
  loading = false;
  PageTitle: string = "自訂網頁";
  model: Webpage;
  groupList : WebpageGroup;

  ngOnInit() {
    this.route.queryParams.subscribe((value) => {
      //console.log(value['type']);
      this.PageType = value['type'];
      if (this.PageType === 'Group') {
        this.PageTitle = "自訂網頁群組";
      }
    });

    this.Main.GetWebpageGroup().subscribe(res => {
      console.log(res.json());
      this.groupList = res.json();
    });

  }

  //自訂網頁群組
  SendGroup() {


  }

  //info=自訂網頁
  Send() {
    console.log('DDD' + this.model.Title);

  }

  initModel() {
    this.model = {
      IDNo: -1,
      Station: 1,
      Title: "",
      Html: "",
      Last_Update: "",
      CateID: 0,
      Flow_Sort: 0,
      Update_Date: "",
      Update_User: "",
      Update_UName: "",
      EDate: "",
      Unit1_ID: 0,
      Unit_ID: 0,
      Unit_Name: "",
      Access_groupID: 0
    }

  }

}
