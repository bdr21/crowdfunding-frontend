import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BEARER, TOKEN_KEY_NAME } from "../shared/constants";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = localStorage.getItem(TOKEN_KEY_NAME);

        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `${BEARER} ${token}`
                }
            })
        }

        return next.handle(req);
    }

}