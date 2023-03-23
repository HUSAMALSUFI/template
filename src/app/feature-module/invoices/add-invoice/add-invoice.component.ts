import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {
  status: boolean = false;
  status2: boolean = false;
  selected!: Date | null;
  public itemsArray: any = [1];
  public serviceArray: any = [0];
  public discountArray: any = [0];
  constructor() { }
  public addItems():void {
    this.itemsArray.push(1)
  }
  public deleteItems(index:any):void {
    this.itemsArray.splice(index, 1)
  }
  public addService():void {
    this.serviceArray.push(1)
  }
  public deleteService(index:any):void {
    this.serviceArray.splice(index, 1)
  }
  public addDiscount():void {
    this.discountArray.push(1)
  }
  public deleteDiscount(index:any):void {
    this.discountArray.splice(index, 1)
  }
  showEvent(){
    this.status = !this.status;       
  }
  showRecurring(){
    this.status2 = !this.status2; 
  }
  ngOnInit(): void {

  }

}
