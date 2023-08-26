import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCampaignService } from 'src/app/_services/create-campaign.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  step3Information: any;

  constructor(private router : Router, private componentService: CreateCampaignService) { }
  
  ngOnInit(): void {
    this.step3Information = this.componentService.getCampaignInformation().step3Information;

  }

  file: File | null = null;

	onSelect(event: any) {
		console.log(event);
		this.file = event.addedFiles[0];
	}

	onRemove(event: any) {
		console.log(event);
		this.file = null;
	}

  nextStep() : void {
    // if (this.file) {
    //   console.log('Next Step');
      // Handle the file here, e.g., upload it to the server
      // ...
      this.componentService.campaignInformation.step3Information = this.step3Information;

      this.router.navigate(['campaigns/new/step4']);
    // } else {
    //   console.log('Please select an image before proceeding.');
    // }
  }

  previousStep() : void {
    console.log("Previous Step");
    this.router.navigate(['campaigns/new/step2']);
  }

}
