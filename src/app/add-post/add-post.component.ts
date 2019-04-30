import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addpostform:FormGroup;
  postsubmit=false;
  constructor(private fb:FormBuilder) { }
     
  ngOnInit() {
    this.addpostform=this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required]
    })
  }
  get f(){ return this.addpostform.controls }
  addpost(){
    console.log(this.addpostform.value)
  }
}
