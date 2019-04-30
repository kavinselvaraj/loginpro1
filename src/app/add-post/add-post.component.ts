import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router,ActivatedRouteSnapshot} from '@angular/router';
import {ImageUploadService} from '../image-upload.service'
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addpostform:FormGroup;
  postsubmit=false;
  private PhotoURL: string = '';
  imageError:boolean = false;
  showImage:boolean = false;
  constructor(private fb:FormBuilder,private imagservice:ImageUploadService,private router:Router) { }
     
  ngOnInit() {
    this.addpostform=this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required]
    })
  }
  get f(){ return this.addpostform.controls }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.PhotoURL = reader.result;
    console.log(this.PhotoURL)
    this.imageError = true;
    this.showImage = true;
  }
  addpost(){
    this.addpostform.value.image=this.PhotoURL;
    this.postsubmit=true;
    if(this.addpostform.invalid){
      this.imageError=false;
      return;
    }else{
      this.imageError=true;
      this.imagservice.imageUpload(this.addpostform.value).subscribe(data=>{
        if(data['message']=='ok' && data['result'] !=''){
         this.router.navigate(['/dashboard']);
        }
        else{
          this.postsubmit=false;
          console.log("else")
        }
      });
    }

  }
  
}
