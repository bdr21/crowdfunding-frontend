import { NgModule } from "@angular/core";
import { OrdersComponent } from "./orders.component";
import { HttpClientModule } from "@angular/common/http";
import { OrdersRoutingModule } from "./orders-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        OrdersComponent
    ],
    imports: [
        OrdersRoutingModule,
        CommonModule, FormsModule, SharedModule
    ],
    providers: [],
    exports: []
})

export class OrdersModule { }