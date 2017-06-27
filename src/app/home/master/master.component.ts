import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styles: []
})
export class MasterComponent implements OnInit {

  @Input()
  class = 'wrapper';

  constructor() { }

  ngOnInit() {
  }

}
