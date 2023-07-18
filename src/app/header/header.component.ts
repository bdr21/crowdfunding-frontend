import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHeaderSticky = false;

  constructor(private sharedService: SharedService) {}

  onLoginButtonClick() {
    this.sharedService.setLoginButtonClicked(true);
  }

  @HostListener('window:scroll')
  onWindowsScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isHeaderSticky = scrollTop > 100;
  }
}
