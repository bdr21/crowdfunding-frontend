import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    private loginButtonClicked = new BehaviorSubject<boolean>(false);

    constructor() {}

    setLoginButtonClicked(value : boolean) {
        this.loginButtonClicked.next(value);
    }

    getLoginButtonClicked() {
        return this.loginButtonClicked.asObservable();
    }
}