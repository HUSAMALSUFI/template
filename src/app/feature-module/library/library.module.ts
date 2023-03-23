import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LibraryRoutingModule } from "./library-routing.module";
import { LibraryComponent } from "./library.component";
import { LibraryMainComponent } from "./library-main/library-main.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    LibraryComponent,
    LibraryMainComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class LibraryModule {}
