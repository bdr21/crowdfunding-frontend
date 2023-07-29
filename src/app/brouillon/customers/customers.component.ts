import { Component, OnInit } from '@angular/core';

import {ICustomer} from '../../shared/interfaces'
import { DataService } from '../../core/data.service';
import { CustomerService } from './customers.service';
import { API_URL } from '../../shared/constants';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  constructor(private dataService : DataService, private httpService : CustomerService) { }

  title: string = 'placeholder';
  people: ICustomer[] = [];
  isInvisible: boolean = false;

  toggleVisibility(): void {
    this.isInvisible = !this.isInvisible;
    this.httpService.dummyRequest(API_URL+"/users").subscribe({
      next: (response) => { console.log("fetch users success", response); },
      error: (error) => { console.log("fetch users error", error); }
    })
  }


  ngOnInit(): void {
    this.title = "Customers Header"
    this.dataService.getCustomers()
                    .subscribe((customers: ICustomer[]) => this.people = customers);
  }

}
