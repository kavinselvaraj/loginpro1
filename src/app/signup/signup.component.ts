import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import  {SignupService} from '../signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  unamePattern = "^(?=(?:.*[A-Z].*){2})(?!(?:.*[A-Z].*){3,})(?=(?:.*[@#$%^!&*+=]){3})(?!.{10,})(?=.{6}).*$";
  signUpForm:FormGroup;
  saveform=false;
  constructor(private fb:FormBuilder,private signservice:SignupService) { }
  ngOnInit() {
    
    this.signUpForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',[Validators.required,Validators.pattern(this.unamePattern)]],
      password:['',Validators.required],
      cpassword:['',Validators.required]
    },{
      validator:this.MustMatch()
    })
  }
  MustMatch() {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls['password'];
        const matchingControl = formGroup.controls['cpassword'];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
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
