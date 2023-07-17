import { Component, OnInit } from '@angular/core';

import {ICustomer} from './../shared/interfaces'
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {
  title: string = 'placeholder';
  people: ICustomer[] = [];
  isInvisible: boolean = false;

  toggleVisibility(): void {
    this.isInvisible = !this.isInvisible;
  }

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.title = "Customers Header"
    this.dataService.getCustomers()
                    .subscribe((customers: ICustomer[]) => this.people = customers);
  }

}
