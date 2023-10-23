import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHeaderSticky = false;
  isMenuOpen: boolean = false;

  @ViewChild('headerSearchBarContainer')
  headerSearchBarContainer!: ElementRef;

  @ViewChild('header')
  header!: ElementRef;

  @ViewChild('headerContent')
  headerContent!: ElementRef;

  @ViewChild('toggleButton')
  toggleButton!: ElementRef;

  @ViewChild('menu')
  menu!: ElementRef;


  constructor(private sharedService: SharedService,
    public authService: AuthService,
    private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      /** https://stackoverflow.com/a/57391798 */

      if (this.toggleButton && this.menu) {
        if (!this.toggleButton.nativeElement.contains(e.target) && !this.menu.nativeElement.contains(e.target)) {
          this.isMenuOpen = false;
        }
      }
    });
  }

  onProfilePhotoClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // @HostListener('document:click', ['$event'])
  // onClick(event: Event) {
  //   if (!this.elementRef.nativeElement.contains(event.target)) {
  //     this.closeMenu();
  //   }
  // }

  onLoginButtonClick() {
    this.sharedService.setLoginButtonClicked(true);
  }

  onSignupButtonClick() {
    this.sharedService.setSignupButtonClicked(true);
  }

  @HostListener('window:scroll')
  onWindowsScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 100) {
      // this.headerSearchBarContainer.nativeElement.classList.add('hidden');
      this.header.nativeElement.classList.add('bg-white');
      this.header.nativeElement.classList.remove('bg-transparent');
      this.header.nativeElement.classList.add('shadow');
      this.header.nativeElement.classList.remove('px-4');
      this.header.nativeElement.classList.remove('pt-4');
      this.headerContent.nativeElement.classList.remove('rounded-lg');
      this.headerContent.nativeElement.classList.remove('shadow');
    } else {
      // this.headerSearchBarContainer.nativeElement.classList.remove('hidden');
      this.header.nativeElement.classList.remove('bg-white');
      this.header.nativeElement.classList.add('bg-transparent');
      this.header.nativeElement.classList.remove('shadow');
      this.header.nativeElement.classList.add('px-4');
      this.header.nativeElement.classList.add('pt-4');
      this.headerContent.nativeElement.classList.add('rounded-lg');
      this.headerContent.nativeElement.classList.add('shadow');
    }
  }
}
