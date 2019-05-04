import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http:HttpClient) { }

 public signup(value){
   return this._http.post('http://localhost:3200/signup/add_user',value).pipe(map(res=> {
     console.log(res)
     if(res['message']=='ok'){
      return res;
     }
    
    }));
  }

}
