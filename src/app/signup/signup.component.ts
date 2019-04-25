import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import  {SignupService} from '../signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  unamePattern = "^[a-z0-9_-]{8,15}$";
  signUpForm:FormGroup;
  saveform=false;
  constructor(private fb:FormBuilder,private signservice:SignupService) { }
  ngOnInit() {
    
    this.signUpForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',[Validators.required,Validators.pattern(this.unamePattern)]],
      password:['',Validators.required]
    })
  }
  
  get f(){return this.signUpForm.controls}

  onSave(){
   this.saveform=true;
   if(this.signUpForm.invalid){
     return;
   }
  this.signservice.signup(this.signUpForm.value).subscribe(data=>{
    console.log(data)
  });
  }
}
