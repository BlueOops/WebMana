import { Component, OnInit } from '@angular/core';
import { Comm } from '../../_comm/comm';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private comm: Comm ) {

    //this.comm.loadScript('jquery.bundle.js');
    //this.comm.loadScript('assets/js/bootstrap.min.js');
  }

  ngOnInit() {

  }

  showMe(){
    $('h1').toggle();
  }

}
