import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LibraryComponent } from "./library.component";
import { LibraryMainComponent } from "./library-main/library-main.component";

const routes: Routes = [
  {
    path: "",
    component: LibraryComponent,
    children: [
      { path: "library-main", component: LibraryMainComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
