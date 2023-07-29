import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    private loginButtonClicked = new BehaviorSubject<boolean>(false);
    private signupButtonClicked = new BehaviorSubject<boolean>(false);
    private loaderVisible = new BehaviorSubject<boolean>(false);


    constructor() {}

    setLoginButtonClicked(value : boolean) {
        this.loginButtonClicked.next(value);
    }

    getLoginButtonClicked() {
        return this.loginButtonClicked.asObservable();
    }

    setSignupButtonClicked(value : boolean) {
        this.signupButtonClicked.next(value);
    }

    getSignupButtonClicked() {
        return this.signupButtonClicked.asObservable();
    }

    setLoaderVisible(value : boolean) {
        this.loaderVisible.next(value);
    }

    getLoaderVisible() {
        return this.loaderVisible.asObservable();
    }
}