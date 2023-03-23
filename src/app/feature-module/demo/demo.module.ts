import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DataTableComponent } from "src/app/shared/data-table/data-table.component";
import { GridTableComponent } from "src/app/shared/grid-table/grid-table.component";

import { SharedModule } from "src/app/shared/shared.module";
import { DemoAddComponent } from "./demo-add/demo-add.component";
import { DemoListComponent } from "./demo-list/demo-list.component";
import { DemoRoutingModule } from "./demo-routing.module";
import { DemoComponent } from "./demo.component";

@NgModule({
    declarations: [
      DemoComponent,
      DemoListComponent,
      DemoAddComponent,
      DataTableComponent,
      GridTableComponent,
    ],
    imports: [
      CommonModule,
      DemoRoutingModule,
      SharedModule
    ]
  })
  export class DemoModule { }