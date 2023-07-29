import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';
import { FeaturedCampaignsComponent } from './featured-campaigns/featured-campaigns.component';
import { CarouselModule } from '@coreui/angular'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '../auth/auth.module';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from '@angular/material/button';
import { SidebarModule } from 'primeng/sidebar'
import { ButtonModule } from 'primeng/button'
import { LayoutModule } from '../layout/layout.module';
import { OverlayModule } from 'primeng/overlay';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    FeaturedCampaignsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    NgbCarouselModule,
    BrowserModule,
    AuthModule,
    MatSidenavModule,
    MatButtonModule,
    SidebarModule,
    ButtonModule,
    LayoutModule,
    OverlayModule
  ],
  exports: [
    BannerComponent,
    HomeComponent,
    FeaturedCampaignsComponent
  ]
})
export class HomeModule { }
