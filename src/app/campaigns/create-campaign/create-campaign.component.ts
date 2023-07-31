import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent {

  onSubmit() {
    console.log("Create Campaign Submitted");
  }

  items: MenuItem[] | undefined;

  activeIndex: number = 0;

  constructor(public messageService: MessageService) { }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  selectedItems: any[] = [];
  selectedItem: any;

  dropdownOptions: any[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    // Add more options as needed
  ];

  onChipChange(event: any) {
    console.log(this.selectedItems);
  }

  ngOnInit() {
    this.items = [
      {
        label: '',
        routerLink: 'step1'
      },
      {
        label: '',
        routerLink: 'step2'
      },
      {
        label: '',
        routerLink: 'step3'
      },
      {
        label: '',
        routerLink: 'step4'
      }
    ];
  }
}
