import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';
import { TOKEN_KEY_NAME } from 'src/app/shared/constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showPassword: boolean = false;
  
  signupForm!: FormGroup;

  constructor(private messageService: MessageService,
    private httpService: AuthService,
    private formBuilder: FormBuilder)
    {
  }
  
  ngOnInit() {
      this.signupForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, this.matchPassword.bind(this)]],
      })
  }
  
  signup(): void {
    // Prepare the signup request payload
    console.log(this.signupForm);
    
    const signupData = this.signupForm.value;


    console.log(signupData);

    this.httpService
      .signup("/users/signup", signupData)
      .subscribe({
        next : (response) => {
          console.log("signup success", response);
        },
        error : (error) => {
          console.log("signup error", error)
        }
      })
  }

  matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = this.signupForm?.get('password')?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { mismatch: true };
  }
}