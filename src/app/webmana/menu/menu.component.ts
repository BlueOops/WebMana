import { element } from 'protractor';
import { WebMenu } from './../../_models/summary';
import { WebMenuService } from './../../_comm/webmenu.service';
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { Modal } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  loading = false;

  data: WebMenu[];
  model: WebMenu;
  NewPageType: string = "";
  Action: string = "";
  ref: string = "";
  _ID: string = "-1";
  constructor(
    private WMenu: WebMenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.GetMenu();
  }
  GetMenu() {

    this.WMenu.GetWebMenu().subscribe(res2 => {
      this.data = res2.json();
      this.initModel();
    });
  }
  ngOnInit() {

  }
  NewPage(pageType: string, ref: string = '-1') {
    $('.popover').removeClass('show');
    this.NewPageType = pageType;
    this.ref = ref;
    this.initModel();
    $('#MO').show();
    this.Action = "New";

  }

  FixPage(IDNo: string) {
    $('.popover').removeClass('show');
    if (IDNo != '-1') {
      this.Action = "Fix";
      let dd: WebMenu[];
      this._ID = IDNo;
      this.WMenu.GetWebMenuByID(IDNo).subscribe(res2 => {
        dd = res2.json();
        this.ref = dd[0].Ref.toString();
        this.model = dd[0];
        $('#MO').show();
      });
    } else {

      console.log('Fix ID Error');
    }

  }
  Send() {
    let newmodel: WebMenu;
    newmodel = {
      IDNo: Number(this._ID),
      Ref: Number(this.ref),
      Title: this.model.Title,
      Href: this.model.Href,
      Target: this.model.Target,
      ImgPath: this.model.ImgPath,
      Sort: this.model.Sort,
      IsRoot: this.model.IsRoot,
      IsOpen: this.model.IsOpen,
      Default_Cate: this.model.Default_Cate,
      Subject: this.model.Subject,
      Des: this.model.Des,
      Type: this.model.Type,
      Theme: this.model.Theme,
      Cake: this.model.Cake,
      Service: this.model.Service,
      keywords: this.model.keywords,
      Station: this.model.Station,
      Update_Date: this.model.Update_Date,
      Update_User: this.model.Update_User,
      TreePath: this.model.TreePath,
      Access_groupID: this.model.Access_groupID
    }
    console.log("Action " + this.Action);
    console.log("Ref" + this.model.Ref);
    switch (this.Action) {
      case "New":
        this.WMenu.postWebMenu(newmodel).subscribe(res2 => {
          this.data = res2.json();
          this.initModel();
          //this.GetMenu();
          this.RoutingPage();
        });
        break;
      case "Fix":
        this.WMenu.putWebMenu(newmodel).subscribe(res2 => {
          //  this.data = res2.json();
          console.log(res2["_body"]);
          this.initModel();
          this.GetMenu();
           $('#MO').hide();

        });
        break;
      default:
        console.log("Submit Error [Not found Action Value]")
        break;
    }


  }

  RoutingPage() {
    switch (this.NewPageType) {
      case "WebPage":
        this.router.navigate(['/webmana/webpage'], { queryParams: { type: 'Info' } });
        break;
      case "WebPageGroup":
        this.router.navigate(['/webmana/webpage'], { queryParams: { type: 'Group' } });
        break;
      case "DocsGroup":

        break;
      case "NewsGroup":

        break;
      case "GallaryGroup":

        break;
      case "OuterUrl":
          this.initModel();
          this.GetMenu();
           $('#MO').hide();
        break;
      default:
        break;
    }
  }

  initModel() {
    this.model = {
      IDNo: -1,
      Ref: -1,
      Title: "",
      Href: "",
      Target: "",
      ImgPath: "",
      Sort: 0,
      IsRoot: 0,
      IsOpen: 0,
      Default_Cate: 0,
      Subject: "",
      Des: "",
      Type: "",
      Theme: "",
      Cake: "",
      Service: "",
      keywords: "",
      Station: 0,
      Update_Date: "",
      Update_User: "",
      TreePath: "",
      Access_groupID: 0
    }/**/

  }
  ModalControll(opener: string, ref: string = '0') {
    // $('#MO').removeClass();
    // $('#MO').addClass("Modal fade");
    console.log(ref);
    switch (opener) {
      case "fade":
        $('#MO').hide();
        break;
      case "-1":
        this.initModel();
        $('#MO').show();
        break;
      default:
        let dd: WebMenu[];
        this.WMenu.GetWebMenuByID(opener).subscribe(res2 => {
          dd = res2.json();
          this.model = dd[0];
          //console.log(dd[0]);
          $('#MO').show();
        });
        break;
    }

    if (opener == "fade") {
      $('#MO').hide();
    } else {



    }
  }
  DeleteMenu() {
    this.Action = "Delete"
    let newmodel: WebMenu;
    newmodel = {
      IDNo: Number(this._ID),
      Ref: Number(this.ref),
      Title: this.model.Title,
      Href: this.model.Href,
      Target: this.model.Target,
      ImgPath: this.model.ImgPath,
      Sort: this.model.Sort,
      IsRoot: this.model.IsRoot,
      IsOpen: this.model.IsOpen,
      Default_Cate: this.model.Default_Cate,
      Subject: this.model.Subject,
      Des: this.model.Des,
      Type: this.model.Type,
      Theme: this.model.Theme,
      Cake: this.model.Cake,
      Service: this.model.Service,
      keywords: this.model.keywords,
      Station: this.model.Station,
      Update_Date: this.model.Update_Date,
      Update_User: this.model.Update_User,
      TreePath: this.model.TreePath,
      Access_groupID: this.model.Access_groupID
    }
    //console.log(this._ID);
    this.WMenu.DelWebMenu(this._ID).subscribe(res2 => {
      console.log(res2["_body"]);
      this.initModel();
      this.GetMenu();
    });

  }


}
