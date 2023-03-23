import { BehaviorSubject } from 'rxjs';

export class routes {
  public static layoutDirection: BehaviorSubject<string> =
    new BehaviorSubject<string>(localStorage.getItem('rtl') || '');
  private static Url = '';
  static rtl = this.layoutDirection.subscribe((res: any) => {
    this.Url = res;
  });

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get profile(): string {
    return this.baseUrl + '/profile';
  }
  public static get profileMain(): string {
    return this.baseUrl + '/profile/profile-main';
  }
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  public static get forgot_password(): string {
    return this.baseUrl + '/forgotpassword';
  }
  public static get register(): string {
    return this.baseUrl + '/register';
  }
  public static get error_screen(): string {
    return this.baseUrl + '/errorpage';
  }
  public static get dashboard(): string {
    return this.baseUrl + '/dashboard';
  }
  public static get students(): string {
    return this.baseUrl + '/students';
  }
  public static get main(): string {
    return this.baseUrl + '/dashboard/main';
  }
  public static get teacher(): string {
    return this.baseUrl + '/dashboard/teacher';
  }
  public static get student(): string {
    return this.baseUrl + '/dashboard/student';
  }
  public static get studentsadd(): string {
    return this.baseUrl + '/students/students-add';
  }
  public static get studentlist(): string {
    return this.baseUrl + '/students/students-list';
  }
  public static get studentview(): string {
    return this.baseUrl + '/students/students-details';
  }
  public static get demo(): string {
    return this.baseUrl + '/demo';
  }
  public static get demoadd(): string {
    return this.baseUrl + '/demo/demo-add';
  }
  public static get demolist(): string {
    return this.baseUrl + '/demo/demo-list';
  }
  public static get teacheradd(): string {
    return this.baseUrl + '/teachers/teachers-add';
  }
  public static get settings(): string {
    return this.baseUrl + '/settings/general-settings';
  }
  public static get addinvoice(): string {
    return this.baseUrl + '/invoices/add-invoice';
  }
  public static get banksettings(): string {
    return this.baseUrl + '/invoices/bank-settings';
  }
  public static get editinvoice(): string {
    return this.baseUrl + '/invoices/edit-invoice';
  }
  public static get viewinvoice(): string {
    return this.baseUrl + '/invoices/view-invoice';
  }
  public static get invoicessettings(): string {
    return this.baseUrl + '/invoices/invoices-settings';
  }
  public static get taxsettings(): string {
    return this.baseUrl + '/invoices/tax-settings';
  }
  public static get invoicespaid(): string {
    return this.baseUrl + '/invoices/invoices-paid';
  }
  public static get invoicesoverdue(): string {
    return this.baseUrl + '/invoices/invoices-overdue';
  }
  public static get invoicesdraft(): string {
    return this.baseUrl + '/invoices/invoices-draft';
  }
  public static get invoicesrecurring(): string {
    return this.baseUrl + '/invoices/invoices-recurring';
  }
  public static get invoicescancelled(): string {
    return this.baseUrl + '/invoices/invoices-cancelled';
  }
  public static get invoicesgrid(): string {
    return this.baseUrl + '/invoices/invoices-grid';
  }
  public static get invoiceslist(): string {
    return this.baseUrl + '/invoices/invoices-list';
  }
  public static get allblog(): string {
    return this.baseUrl + '/blog/all-blog';
  }
  public static get addblog(): string {
    return this.baseUrl + '/blog/add-blog';
  }
  public static get feescollection(): string {
    return this.baseUrl + '/accounts/fees-collection';
  }
  public static get examlist(): string {
    return this.baseUrl + '/examlist/examlist-main';
  }
  public static get timetable(): string {
    return this.baseUrl + '/timetable/timetable-main';
  }
  public static get library(): string {
    return this.baseUrl + '/library/library-main';
  }
  public static get blankpage(): string {
    return this.baseUrl + '/blankpage/blankpage-main';
  }
  public static get event(): string {
    return this.baseUrl + '/events/events-main';
  }
}
