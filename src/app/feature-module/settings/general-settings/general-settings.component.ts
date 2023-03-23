import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {
  removePic:boolean = true;
  removeIcon:boolean = true;

  constructor() { }
  removePicture(){
    this.removePic = !this.removePic; 
  }
  removeFavicon(){
    this.removeIcon = !this.removeIcon; 
  }
  ngOnInit(): void {
    // $(document).on("click",".logo-hide-btn",function () {
    //   $(this).parent().hide();
    // });
    
  }

}
