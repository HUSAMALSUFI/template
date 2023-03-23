import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/core.index';


@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.scss']
})
export class AllBlogComponent implements OnInit {
  blogs: any = [];
  constructor( public router: Router, private dataservice: DataService) {
    this.dataservice.ManageUsers3.subscribe((data: any) => {
      this.blogs = data
    })
   }
  ngOnInit(): void {
  }

}
