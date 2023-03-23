import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsComponent } from "./accounts.component";
import { FeesCollectionComponent } from "./fees-collection/fees-collection.component";

const routes: Routes = [
  {
    path: "",
    component: AccountsComponent,
    children: [
      { path: "fees-collection", component: FeesCollectionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
