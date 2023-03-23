import { Component, OnInit } from '@angular/core';
import { dE } from '@fullcalendar/core/internal-common';
import { DataService } from 'src/app/core/core.index';
@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  public sociallinks!: any[];
  public itemsArray: any = [];
  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.loadStudents();
  }
  loadStudents() {

    this.sociallinks = this.data.social.slice(0,4);
    console.log(this.sociallinks)
  }
  delete(){

  }
  add(){
  }
}
