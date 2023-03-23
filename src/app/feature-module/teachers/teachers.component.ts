import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@HostListener("window: resize", ["$event"])
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  public innerHeight: any;
  constructor(private ngZone: NgZone, private router: Router) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + "px";
      });
    };
    this.getScreenHeight();
   }
   getScreenHeight() {
    this.innerHeight = window.innerHeight + "px";
  }

  ngOnInit() {
   
    // this.router.navigateByUrl("/dashboard/main");
  }
  onResize(event:any) {
    this.innerHeight = event.target.innerHeight + "px";
  }

}
