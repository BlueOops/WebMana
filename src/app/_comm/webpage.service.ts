import { Webpage } from './../_models/summary';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Comm } from './comm';

@Injectable()
export class WebpageService {

  constructor(private http: Http, private comm: Comm) { }

  GetWebpage(): Observable<any> {
    return this.http.get('/websiteapi_back/Webpage');
  }
  GetWebpageByID(id: string): Observable<any> {
    return this.http.get('/websiteapi_back/Webpage/' + id);
  }
  GetWebpageGroup(): Observable<any> {
    return this.http.get('/websiteapi_back/webpagegroup/');
  }
  postWebpage(WebpageData: Webpage): Observable<any> {
    return this.http.post('/websiteapi_back/Webpage', WebpageData);
  }
  putWebpage(WebpageData: Webpage): Observable<any> {
    return this.http.put('/websiteapi_back/Webpage', WebpageData);
  }
  DelWebpage(id: string): Observable<any> {
    return this.http.delete('/websiteapi_back/Webpage', id);
  }
}
