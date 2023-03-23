import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersAddComponent } from './teachers-add/teachers-add.component';
import { TeachersComponent } from './teachers.component';

const routes: Routes = [{ 
path: '', 
component: TeachersComponent,
children: [
  { path: "teachers-add", component: TeachersAddComponent },
], }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
