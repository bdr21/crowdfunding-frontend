import { NgModule } from '@angular/core';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './create-campaign/step1/step1.component';
import { Step2Component } from './create-campaign/step2/step2.component';
import { Step3Component } from './create-campaign/step3/step3.component';
import { Step4Component } from './create-campaign/step4/step4.component';

const routes: Routes = [
    { path: 'campaigns', component: CampaignsComponent },
    {
        path: 'campaigns/new', component: CreateCampaignComponent, children: [
            { path: '', redirectTo: 'step1', pathMatch: 'full' },
            { path: 'step1', component: Step1Component },
            { path: 'step2', component: Step2Component },
            { path: 'step3', component: Step3Component },
            { path: 'step4', component: Step4Component },
            // Add more steps as needed
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CampaignsRoutingModule { }
