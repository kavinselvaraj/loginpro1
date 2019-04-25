import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  login(value){
    console.log(value)
    this._http.post("http://localhost:3200/signup/login_user",value).pipe(map(res=>{
      console.log(res);
      return res;
    }))
  }
}
