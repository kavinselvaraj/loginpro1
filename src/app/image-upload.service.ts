import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private _http:HttpClient) { }
  public imageUpload(value){
    return this._http.post('http://localhost:3200/addpost/addblog',value).pipe(map(data=>{
      return true;
    }))
  }
}
