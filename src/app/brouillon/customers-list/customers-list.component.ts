import { Component, Input, OnInit } from "@angular/core";
import { ICustomer } from "../../shared/interfaces";
import { SorterService } from "../../core/sorter.service";

@Component({
    selector: 'customers-customers-list',
    templateUrl: 'customers-list.component.html'
})

export class CustomersListComponent implements OnInit {
    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number = 0;
    currencyCode: string = 'MAD';

    constructor(private sorterService: SorterService) { }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    cList: ICustomer[] = [];
    @Input() get cListGS() {
        return this.cList;
    }

    set cListGS(val : ICustomer[]) {
        if (val) {
            console.log("set cListGS was called");
            console.log("val", val);
            console.log("cList", this.cList);
            console.log("filteredCustomers", this.filteredCustomers);
            this.filteredCustomers = this.cList = val;
            
            this.calculateOrders();
        }
    }

    sort(prop: string) : void {
        this.sorterService.sort(this.filteredCustomers, prop);
    }

    calculateOrders() : void {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal ?? 0;
        });
    }

    filterFunction(data: string) : void {
        if (data) {
            this.filteredCustomers = this.cList.filter((cust: ICustomer) => {
                const nameCheck = cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1;
                const cityCheck = cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1;
                if (!cust.orderTotal) {
                    return nameCheck || cityCheck;
                }
                return nameCheck || cityCheck || cust.orderTotal.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredCustomers = this.cList;
        }
        this.calculateOrders();
    }

}