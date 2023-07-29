import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../core/data.service";
import { ICustomer, IOrder } from "../../shared/interfaces";
import { nullCustomer } from "src/assets/null.data";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    // styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

    customer : ICustomer | null | undefined;
    orders: IOrder[] | undefined;

    constructor(private route : ActivatedRoute, private dataService : DataService) { }
    
    ngOnInit(): void {
        console.log("ngOnInit of OrdersComponent was called");
        
        let idStr : string | null = this.route.snapshot.paramMap.get('id');
        let idNum : number = 0;
        if (idStr) { idNum = +idStr }
        this.dataService.getCustomer(idNum).subscribe(
            (c : ICustomer | null) => {
                if (c) {this.customer = c;}
                else {
                    this.customer = null;
                }
            }
        )

        this.dataService.getOrders(idNum).subscribe(
            (orders: IOrder[]) => {
                this.orders = orders;
            }
        )
    }

}