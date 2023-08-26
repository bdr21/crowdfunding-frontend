import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateCampaignService {

  constructor() { }

  campaignInformation = {
    step1Information: {
      city: '',
      zipcode: '',
      category: ''
    },
    step2Information: {
      goal: 0,
    },
    step3Information: {
      imageURL: '',
    },
    step4Information: {
      title: '',
      description: '',
    }
  };

  private stepsComplete = new Subject<any>();

  stepsComplete$ = this.stepsComplete.asObservable();

  getCampaignInformation() {
    return this.campaignInformation;
  }

  setCampaignInformation(campaignInformation : any) {
    this.campaignInformation = campaignInformation;
  }

  complete() {
    this.stepsComplete.next(this.campaignInformation);
  }
}

