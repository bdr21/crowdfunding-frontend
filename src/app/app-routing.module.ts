import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { CampaignsComponent } from './campaigns/campaigns/campaigns.component';
import { CreateCampaignComponent } from './campaigns/create-campaign/create-campaign.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: HomeComponent },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'campaigns/new', component: CreateCampaignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


// { path: 'home', pathMatch:'full', component: HomeComponent },
// { path: 'loader', pathMatch:'full', component: LoaderComponent },
// { path: 'login', pathMatch:'full', redirectTo: '/login' },
// { path: '**', pathMatch:'full', redirectTo: '/customers' }
