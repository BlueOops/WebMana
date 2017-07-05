import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Comm } from './comm';
import { LoginData, Member } from '../_models/member';

@Injectable()
export class UserService {

  constructor(private http: Http, private comm: Comm) { }

  postLogin(logindata: LoginData): Observable<any> {
    return this.http.post('/websiteapi_back/login', logindata);
  }

  checkLogin(): Observable<any> {
    return this.http.get('/websiteapi_back/login');
  }

  GetMenu(): Observable<any> {
    return this.http.get('/websiteapi_back/Menu');
  }


}
