import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/core.index';

@Component({
  selector: 'app-invoices-grid',
  templateUrl: './invoices-grid.component.html',
  styleUrls: ['./invoices-grid.component.scss']
})
export class InvoicesGridComponent implements OnInit {
  public invoicesList!: any;
  public url: any = "invoicesList";
  status:boolean= false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadInvoices();
  }
  showUser(){
    this.status = !this.status; 
  }
  showDate(){
    this.status2 = !this.status2; 
  }
  showStatus(){
    this.status3 = !this.status3; 
  }
  showCategory(){
    this.status4 = !this.status4; 
  }
  loadInvoices() {
    this.invoicesList = this.dataService.invoicesList
  }

}
