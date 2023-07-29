import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "../../shared/constants";
import { Observable } from "rxjs";

@Injectable()
export class CustomerService {

    constructor(private http : HttpClient) {}

    dummyRequest(url : string) : Observable<any> {
        return this.http.get(url);
    }
}