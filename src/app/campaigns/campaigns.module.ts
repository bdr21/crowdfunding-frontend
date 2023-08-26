import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { Step1Component } from './create-campaign/step1/step1.component';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { Step2Component } from './create-campaign/step2/step2.component';
import { Step3Component } from './create-campaign/step3/step3.component';
import { Step4Component } from './create-campaign/step4/step4.component';
import { TagModule } from 'primeng/tag';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CreateCampaignService } from '../_services/create-campaign.service';
import { ReviewStepComponent } from './create-campaign/review-step/review-step.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  providers: [
    CreateCampaignService
  ],
  declarations: [
    CampaignsComponent,
    CreateCampaignComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    ReviewStepComponent
  ],
  imports: [
    CampaignsRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    DividerModule,
    StepsModule,
    ToastModule,
    ScrollPanelModule,
    InputTextModule,
    ChipsModule,
    DropdownModule,
    ButtonModule,
    TagModule,
    NgxDropzoneModule,
    InputTextareaModule,
    InputNumberModule
  ]
})
export class CampaignsModule { }
