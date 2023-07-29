import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './brouillon/customers/customers.component';
import { CustomersModule } from './brouillon/customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './brouillon/orders/orders.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { LoaderComponent } from './layout/loader/loader.component';
import { CampaignsModule } from './campaigns/campaigns.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    OrdersModule,
    AuthModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HomeModule,
    LayoutModule,
    CampaignsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
