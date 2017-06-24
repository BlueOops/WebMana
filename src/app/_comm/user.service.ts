import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Comm } from './comm';
import { LoginData, Member } from '../_models/member';

@Injectable()
export class UserService {

  constructor(private http: Http, private comm: Comm) { }

  postLogin(logindata: LoginData): Observable<any> {
    return this.http.post('/assets/login.json', logindata);
  }

  checkLogin(): Observable<any> {
    return this.http.get('/assets/login.json');
  }

}
