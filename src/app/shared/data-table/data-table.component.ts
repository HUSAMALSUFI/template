import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { TableService } from 'src/app/core/services/table/table.service';

export interface FiledColumns {
  check: string;
  name: string;
  label?: string;
  type?: string;
  image: string;
  actions: [];
  style: {};
}
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnDestroy {
  data: any = [];
  dtTrigger: Subject<any> = new Subject<any>();
  @Input() columns: FiledColumns[] = [];
  @Input() APIRoute: any;
  @Output() Edit = new EventEmitter<{ data: any }>();
  @Output() Show = new EventEmitter<{ data: any }>();
  @Output() Delete = new EventEmitter<{ Id: number }>();
  dtOptions: any = {}
  constructor(private service: TableService) { }

  ngOnInit() {
debugger

    this.loadData();
    // this.dtOptions={
    // }
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe()
  }

  async loadData() {
    debugger
    await this.service.loadData(this.APIRoute).subscribe(_data => {
      this.data = _data;
      this.dtTrigger.next(_data);
    })
  }
  onEdit(row: any) {
    debugger
    this.Edit.emit({
      data: row
    })
  }

  onDelete(id: number) {
    debugger
    this.Delete.emit({
      Id: id
    })
  }

  onShow(row: any){
    debugger
    this.Show.emit({
      data: row
    })
  }
}
