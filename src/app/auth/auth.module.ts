import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { ToastModule } from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AuthRoutingModule,
    FormsModule,
    ToastModule,
    BrowserModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    MessageService
  ]
})
export class AuthModule { }
