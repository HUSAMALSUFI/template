import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAddComponent } from './demo-add/demo-add.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  {
    path: "",
    component: DemoComponent,
    children: [
      { path: "demo-list", component: DemoListComponent },
      { path: "demo-add", component: DemoAddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
