import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from 'src/app/core/core.index';
import { SideBarService } from 'src/app/core/services/side-bar/side-bar.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  public miniSidebar: boolean = false;
  elem = document.documentElement

  constructor(public router: Router,
    private auth: AuthService,
    private sideBar: SideBarService,
    private translate: TranslateService) {
    this.sideBar.toggleSideBar.subscribe((res: any) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
  }
  ngOnInit(): void { }
  public logOut(): void {
    this.auth.logout();
  }
  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
  useLanguage(language: string): void {
    debugger
    this.translate.use(language);
  }


  Logout() {
    localStorage.removeItem("LoginData");
    this.router.navigate(["/login"]);
  }
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next(true);
    } else {
      this.sideBar.expandSideBar.next(false);
    }
  }
  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }
  showdropdown() {
    this.status = !this.status;
  }
}
