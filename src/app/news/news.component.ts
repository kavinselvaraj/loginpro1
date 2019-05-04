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
    this.newsetch();
  }
  newsetch(){
    this.imagservice.blog().subscribe(data=>
      {
        this.sample='http://182.72.85.21/angular-pro/loginback/loginback';
        
        //console.log(this.sample)
        this.news=data['result'];
      })
  }
}
