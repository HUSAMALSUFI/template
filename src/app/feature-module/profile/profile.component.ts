import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],

})
export class ProfileComponent implements OnInit {
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
