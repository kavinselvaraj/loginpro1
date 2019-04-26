import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient,private router:Router) { }

  public login(value){
   return this._http.post('http://localhost:3200/signup/login_user',value).pipe(map(res=> {
     if(res['message']=='ok'){
      return res;
     }
    
    }));
  }
  logout(){
    this.router.navigateByUrl('/login');
  }
}
