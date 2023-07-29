import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]=filter />
    `
})

export class FilterTextBoxComponent implements OnInit {

    _filter: string = "";
    @Input() get filter() {
        return this._filter;
    }
    set filter(val : string) {
        this._filter = val;
        this.dataEvent.emit(this._filter)
    }

    @Output() dataEvent = new EventEmitter<string>();

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}