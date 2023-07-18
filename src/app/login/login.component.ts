import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  rememberMe: boolean = false;

  constructor(private messageService: MessageService) {}

  login(): void {
    // Perform login logic
    if (this.username === 'admin' && this.password === 'password') {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
    }
  }
}
