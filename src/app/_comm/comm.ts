import { Injectable } from '@angular/core';

@Injectable()
export class Comm {

  constructor() { }

  public BASE_URL =  '/garydata/'; // 'http://www.drinsurance.com.tw/api/';

  loadScript(url: string) {
    var s = document.createElement('script');
    s.setAttribute('src', url);
    var head = document.getElementsByTagName('body')[0];
    if (head) { head.appendChild(s); }
  }

}
