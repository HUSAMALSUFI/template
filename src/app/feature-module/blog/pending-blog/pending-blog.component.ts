import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/core.index';

@Component({
  selector: 'app-pending-blog',
  templateUrl: './pending-blog.component.html',
  styleUrls: ['./pending-blog.component.scss']
})
export class PendingBlogComponent implements OnInit {
  pendings: any = [];
  constructor( public router: Router, private dataservice: DataService) {
    this.dataservice.ManageUsers1.subscribe((data: any) => {
      this.pendings = data
    })
   }

  ngOnInit(): void {
  }

}
