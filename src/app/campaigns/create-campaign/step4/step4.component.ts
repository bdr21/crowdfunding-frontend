import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCampaignService } from 'src/app/_services/create-campaign.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  step4Information: any;

  constructor(private router : Router, private componentService: CreateCampaignService) { }
  ngOnInit(): void {
    this.step4Information = this.componentService.getCampaignInformation().step4Information;
  }

  previousStep() : void {
    console.log("Previous Step");
    this.router.navigate(['campaigns/new/step3']);
  }

  nextStep() : void {
    console.log("Next Step");
    this.componentService.campaignInformation.step4Information = this.step4Information;
    this.router.navigate(['campaigns/new/review']);
  }
  
}
