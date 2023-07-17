import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  closeResult: string | undefined;
  constructor(private offcanvasService: NgbOffcanvas) {}
  
  openEnd(content: TemplateRef<any>) {
    const container = document.querySelector('.offcanvas-cont');
    this.offcanvasService.open(content, { container : container as HTMLElement, position: 'end' , panelClass: 'offcanvas-container custom-offcanvas'});
  }
}
