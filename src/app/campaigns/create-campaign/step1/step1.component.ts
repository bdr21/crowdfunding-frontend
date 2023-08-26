import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCampaignService } from 'src/app/_services/create-campaign.service';

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

  step1Information: any;

  submitted: boolean = false;

  cities: City[] | undefined;

  selectedCity: City | undefined;

  nextStep(): void {
    console.log("Next Step");
    // if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
    this.componentService.campaignInformation.step1Information = this.step1Information;
    this.router.navigate(['campaigns/new/step2']);
    //   return;
    // }

    this.submitted = true;
  }

  constructor(private router: Router, private componentService: CreateCampaignService) { }

  ngOnInit(): void {
    this.step1Information = this.componentService.getCampaignInformation().step1Information;
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
