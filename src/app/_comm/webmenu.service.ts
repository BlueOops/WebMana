
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Comm } from './comm';
import { WebMenu } from '../_models/summary';

@Injectable()
export class WebMenuService {

  constructor(private http: Http, private comm: Comm) { }

  GetWebMenu(): Observable<any> {
    return this.http.get('/websiteapi_back/webMenu');
  }
  GetWebMenuByID(id: string): Observable<any> {
    return this.http.get('/websiteapi_back/webMenu/' + id);
  }
  postWebMenu(WebMenuData: WebMenu): Observable<any> {
    return this.http.post('/websiteapi_back/webMenu', WebMenuData);
  }
  putWebMenu(WebMenuData: WebMenu): Observable<any> {
    return this.http.put('/websiteapi_back/webMenu', WebMenuData);
  }
  DelWebMenu(id: string): Observable<any> {
    return this.http.delete('/websiteapi_back/webMenu', id);
  }
}
