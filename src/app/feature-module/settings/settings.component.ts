import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

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

  ngOnInit(): void {

  }
  onResize(event:any) {
    this.innerHeight = event.target.innerHeight + "px";
  }

}
