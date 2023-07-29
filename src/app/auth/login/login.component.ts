import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';
import { TOKEN_KEY_NAME } from 'src/app/shared/constants';
import { SharedService } from 'src/app/shared/shared.service';
import { ILoginResponse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  rememberMe: boolean | undefined = false;
  showPassword: boolean = false;

  constructor(private messageService: MessageService,
    private authService: AuthService,
    private sharedService: SharedService ) {}

  login(): void {
    // Prepare the login request payload
    const loginData = {
      email: this.username,
      password: this.password
    };

    console.log(this.username, this.password);

    this.authService
      .login("/users/login", loginData)
      .subscribe({
        next : (response) => {
          this.handleLoginSuccess(response);
        },
        error : (error) => {
          this.handleLoginError(error);
        }
      })
  }

  handleLoginSuccess(response: ILoginResponse) : void {
    console.log("login success", response);
    this.setAuthServiceLoggedIn(true);
    this.setSharedServiceLoaderVisible(true);
    this.setAuthServiceToken(response.token);
  }

  handleLoginError(error: any) : void {
    console.log("login error", error);
  }

  setAuthServiceLoggedIn(state: boolean) : void {
    this.authService.setLoggedIn(state);
  }
  setSharedServiceLoaderVisible(state: boolean) {
    this.sharedService.setLoaderVisible(state);
  }
  setAuthServiceToken(token: string) {
    this.authService.setToken(token);
  }
}



// Make an HTTP POST request to the server
    // this.http.post<any>('http://localhost:8080/users/login', loginData)
    //   .subscribe({
    //     next: (response) => {
    //       // Process the response from the server
    //       if (response.success) {
    //         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful' });
    //       } else {
    //         this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
    //       }
    //     },
    //     error: (error) => {
    //       // Handle any errors that occur during the HTTP request
    //       console.error('Error occurred:', error);
    //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during login' });
    //     }
    //   });
