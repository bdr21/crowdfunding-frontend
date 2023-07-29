import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnChanges {

  constructor(private sharedService: SharedService) {}

  @Input() show: boolean = false;
  private timeoutActive: boolean = false;
  
  toggleLoader() : void {
    if (!this.timeoutActive) {
      this.show = !this.show;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['show'] && this.show) {
      this.timeoutActive = true;
      setTimeout(() => {
        this.sharedService.setLoaderVisible(!this.show);
        this.sharedService.setLoginButtonClicked(false);
        this.timeoutActive = false;
      }, 2000);
    }
  }
}
