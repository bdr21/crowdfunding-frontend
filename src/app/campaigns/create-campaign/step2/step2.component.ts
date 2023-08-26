import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCampaignService } from 'src/app/_services/create-campaign.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  step2Information: any;

  constructor(private router: Router, private componentService: CreateCampaignService) { }

  ngOnInit(): void {
    this.step2Information = this.componentService.getCampaignInformation().step2Information;
  }

  nextStep(): void {
    console.log("Next Step");
    this.componentService.campaignInformation.step2Information = this.step2Information;

    this.router.navigate(['campaigns/new/step3']);
  }

  previousStep(): void {
    console.log("Previous Step");
    this.router.navigate(['campaigns/new/step1']);
  }

}
