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

@NgModule({
  declarations: [
    CampaignsComponent,
    CreateCampaignComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DividerModule,
    StepsModule,
    ToastModule,
    ScrollPanelModule
  ]
})
export class CampaignsModule { }
