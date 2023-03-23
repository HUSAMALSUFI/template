import { Component, OnInit, ViewEncapsulation, HostListener, NgZone } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService, DataService } from '../core/core.index';
import { SideBarService } from '../core/services/side-bar/side-bar.service';
import { Location } from '@angular/common';
@HostListener("window: resize", ["$event"])
@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrls: ['./feature-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureModuleComponent implements OnInit {
  public innerHeight: any;
  title = 'template';
  public authenticated: boolean = false;
  public miniSidebar: boolean = false;
  public expandMenu: boolean = false;
  public mobileSidebar: boolean = false;
  url: any;
  show: boolean = true;
  currentYear: number = new Date().getFullYear();

  public layoutPosition: string = '1';

  public base = '';
  public page = '';
  constructor( private auth: AuthService,
    private sideBar: SideBarService,
    public router: Router,
    private data: DataService,
    location: Location,
    private ngZone: NgZone) {
      this.getRoutes(this.router);
      // <* condition to check weather login *>
    this.auth.checkAuth.subscribe((res: any) => {
      if (res == 'true') {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      
    });

    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    // <* condition to check weather login *>

    // <* condition to check side bar position *>
    this.sideBar.toggleSideBar.subscribe((res: any) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    // <* condition to check side bar position *>

    // <* condition to check mobile side bar position *>
    this.sideBar.toggleMobileSideBar.subscribe((res: any) => {
      if (res == 'true' || res == true) {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    // <* condition to check mobile side bar position *>

    this.sideBar.expandSideBar.subscribe((res: any) => {
      this.expandMenu = res;
      // <* to collapse submenu while toggling side menu*>
      if (res == false && this.miniSidebar == true) {
        this.data.sideBar.map((mainMenus: any) => {
          mainMenus.menu.map((resMenu: any) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      // <* to expand submenu while hover toggled side menu*>
      if (res == true && this.miniSidebar == true) {
        this.data.sideBar.map((mainMenus: any) => {
          mainMenus.menu.map((resMenu: any) => {
            let menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });
    // <* to check layout position *>
    this.sideBar.layoutPosition.subscribe((res: any) => {
      this.layoutPosition = res;
    });
    // <* to check layout position *>
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + "px";
      });
    };
    this.getScreenHeight();
     }
     public toggleMobileSideBar(): void {
      this.sideBar.switchMobileSideBarPosition();
    }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    sessionStorage.clear();
  }
  getScreenHeight() {
    this.innerHeight = window.innerHeight + "px";
  }
  onResize(event:any) {
    this.innerHeight = event.target.innerHeight + "px";
  }
  getRoutes(event:any){
    let splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
         // <* condition to hide header and sidebar for login page *>
        if (this.base == 'login' || this.base == 'register' || this.base == 'forgotpassword' || this.base == 'errorpage') {
          this.show = false;
        }else{
          this.show = true;
        }
  }
}
