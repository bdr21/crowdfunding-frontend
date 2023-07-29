import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHeaderSticky = false;

  constructor(private sharedService: SharedService, public authService: AuthService) {}

  onLoginButtonClick() {
    this.sharedService.setLoginButtonClicked(true);
  }

  onSignupButtonClick() {
    this.sharedService.setSignupButtonClicked(true);
  }

  @HostListener('window:scroll')
  onWindowsScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isHeaderSticky = scrollTop > 100;
  }
}
