import { Component, OnInit } from '@angular/core';
import { TOKEN_KEY_NAME } from './shared/constants';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-one';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Check if the user is logged in during the application initialization
    const token = localStorage.getItem(TOKEN_KEY_NAME);
    if (token) {
      // we only check for jwt presence, validation or authorization checks should always be performed on the server-side
      this.authService.setLoggedIn(true);
    }
  }

  showHeaderFooter(): boolean {
    // Replace 'create-campaign' with the actual route path of the Create Campaign component
    // return !this.router.url.includes('campaigns/new');
    return true;
  }
}
