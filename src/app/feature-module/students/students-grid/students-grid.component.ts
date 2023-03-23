import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/core.index';

@Component({
  selector: 'app-students-grid',
  templateUrl: './students-grid.component.html',
  styleUrls: ['./students-grid.component.scss']
})
export class StudentsGridComponent implements OnInit {

  grids: any = [];
  constructor( public router: Router, private dataservice: DataService) {
    this.dataservice.ManageUsers2.subscribe((data: any) => {
      this.grids = data
    })
   }

  ngOnInit(): void {
  }

}
