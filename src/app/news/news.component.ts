import { Component, OnInit } from '@angular/core';
import {ImageUploadService} from '../image-upload.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
   news:any;
   sample:any;
  constructor(private imagservice:ImageUploadService) { }

  ngOnInit() {
    this.newsfetch();
  }
  newsfetch(){
    this.imagservice.blog().subscribe(data=>
      {
        this.sample='http://192.168.43.212/angular-pro/loginback/loginback';
        
        //console.log(this.sample)
        this.news=data['result'];
      })
  }
}
