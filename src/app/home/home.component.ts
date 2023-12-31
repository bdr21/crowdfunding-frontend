import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginButtonClicked: boolean = false;
  signupButtonClicked: boolean = false;
  loaderVisible: boolean = false;

  constructor(private sharedService : SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.getLoginButtonClicked().subscribe(
      (value : boolean) => { this.loginButtonClicked = value; }
    );
    this.sharedService.getSignupButtonClicked().subscribe(
      (value : boolean) => { this.signupButtonClicked = value; }
    );
    this.sharedService.getLoaderVisible().subscribe(
      (value : boolean) => { this.loaderVisible = value; }
    );
  }
}
