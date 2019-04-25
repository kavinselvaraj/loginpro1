import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validator, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginfrm:FormGroup;
   loginsubmit=false;
  constructor(private fb:FormBuilder,private logservice:LoginService) { }

  ngOnInit() {
    this.loginfrm=this.fb.group(
      {
        username:['',Validators.required],
        password:['',Validators.required]
      })
  }
  get f(){return this.loginfrm.controls;}

  onLogin(){
    this.loginsubmit=true;
    if(this.loginfrm.invalid){return}
    this.logservice.login(this.loginfrm.value).subscribe(data=>{
      console.log(data)
    })
  }
}
