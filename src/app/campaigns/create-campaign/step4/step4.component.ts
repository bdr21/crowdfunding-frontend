import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  constructor(private router : Router) { }
  ngOnInit(): void {
      
  }

  previousStep() : void {
    console.log("Previous Step");
    this.router.navigate(['campaigns/new/step3']);
  }
}
