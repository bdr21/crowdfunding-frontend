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
export class LoginComponent implements OnInit {
  open: boolean = false;
  email: string = "";
  password: string = "";
  rememberMe: boolean | undefined = false;
  showPassword: boolean = false;
  z1002class:boolean = false;

  constructor(private messageService: MessageService,
    private authService: AuthService,
    private sharedService: SharedService) { }
    
  closeSlideOver() {
    this.open = false;
    setTimeout(() => {
      this.z1002class = true;
    }
    , 3000);
  }

  async setSlideOverZIndex() {
    if (this.open) {
      this.z1002class = true;
    } else {
      const result = await new Promise<boolean>((resolve) => {
        setTimeout(() => {
          resolve(false);
        }, 900);
      });
      this.z1002class = result;
    }
  }


  ngOnInit(): void {
    this.sharedService.getLoginButtonClicked().subscribe(
      (value: boolean) => {
        this.open = value;
      }
    );
  }

  login(): void {
    // Prepare the login request payload
    const loginData = {
      email: this.email,
      password: this.password
    };

    console.log(this.email, this.password);

    this.authService
      .login("/users/login", loginData)
      .subscribe({
        next: (response) => {
          this.handleLoginSuccess(response);
        },
        error: (error) => {
          this.handleLoginError(error);
        }
      })
  }

  handleLoginSuccess(response: ILoginResponse): void {
    console.log("login success", response);
    this.setAuthServiceLoggedIn(true);
    this.setSharedServiceLoaderVisible(true);
    this.setAuthServiceToken(response.token);
  }

  handleLoginError(error: any): void {
    console.log("login error", error);
  }

  setAuthServiceLoggedIn(state: boolean): void {
    this.authService.setLoggedIn(state);
  }
  setSharedServiceLoaderVisible(state: boolean) {
    this.sharedService.setLoaderVisible(state);
  }
  setAuthServiceToken(token: string) {
    this.authService.setToken(token);
  }
}
