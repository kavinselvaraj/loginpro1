import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginfrm:FormGroup;
   loginsubmit=false;
   loading=true;
  constructor(private fb:FormBuilder,private logservice:LoginService,private router:Router) { }

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
    if(this.loginfrm.invalid){
      return;
    }
   this.logservice.login(this.loginfrm.value).subscribe(data=>{
     if(data['message']=='ok' && data['result'] !=''){
      this.router.navigate(['/dashboard']);
     }
     else{
       this.loading=false;
       console.log("else")
     }
   });
   }
}
