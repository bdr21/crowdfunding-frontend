import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { authGuard } from "src/app/auth/auth.guard";

const routes : Routes = [
    { path: 'customers', component: CustomersComponent, canActivate: [authGuard] },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class CustomersRoutingModule { }