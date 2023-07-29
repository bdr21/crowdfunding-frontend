import { HttpClient } from "@angular/common/http";
import { ILoginRequest, ILoginResponse, ISignUpResponse } from "../shared/interfaces";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { API_URL, TOKEN_KEY_NAME } from "../shared/constants";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private loggedInSubject = new BehaviorSubject<boolean>(false);
    loggedIn$ = this.loggedInSubject.asObservable();

    constructor(private http: HttpClient) { }

    isLoggedIn(): boolean {
        return this.loggedInSubject.getValue();
    }

    setLoggedIn(value: boolean) {
        this.loggedInSubject.next(value);
    }

    setToken(token: string) {
        localStorage.setItem(TOKEN_KEY_NAME, token);
    }

    removeToken() : void {
        localStorage.removeItem(TOKEN_KEY_NAME);
    }

    login(route: string, body: ILoginRequest): Observable<ILoginResponse> {
        const url = API_URL + route;
        return this.http.post<ILoginResponse>(url, body); // this.http.post(url, body, { headers });
    }

    signup(route: string, body: ILoginRequest): Observable<ISignUpResponse> {
        const url = API_URL + route;
        return this.http.post<ISignUpResponse>(url, body);
    }
}