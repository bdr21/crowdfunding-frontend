import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  cities: City[] | undefined;

  selectedCity: City | undefined;

  nextStep() : void {
    console.log("Next Step");
    this.router.navigate(['campaigns/new/step2']);
  }

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
