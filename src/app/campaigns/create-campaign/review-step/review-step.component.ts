import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { CreateCampaignService } from 'src/app/_services/create-campaign.service';

@Component({
  selector: 'app-review-step',
  templateUrl: './review-step.component.html',
  styleUrls: ['./review-step.component.css']
})
export class ReviewStepComponent {

  campaignInformation: any;
  subscription: Subscription | undefined;

  constructor(private router: Router,
    private componentService: CreateCampaignService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.campaignInformation = this.componentService.getCampaignInformation();
    this.subscription = this.componentService.stepsComplete$.subscribe((campaignInformation) => {
      this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + campaignInformation.step4Information.title });
    });
  }

  previousStep(): void {
    console.log("Previous Step");
    this.router.navigate(['campaigns/new/step4']);
  }

  complete() {
    this.componentService.complete();
  }
}
