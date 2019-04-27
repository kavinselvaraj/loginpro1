import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  token?: string;
}
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
  constructor(private _http:HttpClient,private router:Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('role')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    //console.log("service"+this.currentUserSubject.value)
    return this.currentUserSubject.value;
}

  public login(value){
   return this._http.post('http://localhost:3200/signup/login_user',value).pipe(map(res=> {
     if(res['message']=='ok'){
      localStorage.setItem('role',res['result'][0]['role'])
      return res;
     }
    
    }));
  }
  logout(){
    this.router.navigateByUrl('/login');
    localStorage.removeItem('role')
  }
}
