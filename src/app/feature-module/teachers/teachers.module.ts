import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeachersAddComponent } from './teachers-add/teachers-add.component';

import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    TeachersComponent,
    TeachersAddComponent,
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule
  ]
})
export class TeachersModule { }
