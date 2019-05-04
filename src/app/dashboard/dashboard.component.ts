import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import {ImageUploadService} from '../image-upload.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['id', 'title', 'description'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private imagservice:ImageUploadService) { }
  
  ngOnInit() {
    this.blogfetch();
  }
  blogfetch(){
    this.imagservice.blog().subscribe(data=>
      {
      this.dataSource = new MatTableDataSource(data['result']);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
