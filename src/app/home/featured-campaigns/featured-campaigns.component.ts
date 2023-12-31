import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-featured-campaigns',
    templateUrl: './featured-campaigns.component.html',
    styleUrls: ['./featured-campaigns.component.css']
})
export class FeaturedCampaignsComponent implements OnInit {

    slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

    constructor() { }

    ngOnInit(): void {
        this.slides[0] = {
            id: 0,
            src: './assets/img/angular.jpg',
            title: 'First slide',
            subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        };
        this.slides[1] = {
            id: 1,
            src: './assets/img/react.jpg',
            title: 'Second slide',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
        this.slides[2] = {
            id: 2,
            src: './assets/img/vue.jpg',
            title: 'Third slide',
            subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        }
    }
}