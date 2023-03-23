import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {

  status: boolean = false;
  status2: boolean = false;
  public itemsArray: any = [1,2];
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
