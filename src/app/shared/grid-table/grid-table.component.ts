import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableService } from 'src/app/core/services/table/table.service';

export interface FiledColumns {
  label?: string;
  type?: string;
  image: string;
  name: string;
  actions: [];
}
@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})
export class GridTableComponent {
  grids: any = [];
  @Input() APIRoute: any;
  @Input() columns: FiledColumns[] = [];
  @Output() Edit = new EventEmitter<{ data: any }>();
  @Output() Delete = new EventEmitter<{ Id: number }>();

  constructor(private service: TableService) { }

  ngOnInit() {
    this.loadData();
  }
  async loadData() {
    debugger
    await this.service.loadData(this.APIRoute).subscribe(_data => {
      this.grids = _data;
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
}
