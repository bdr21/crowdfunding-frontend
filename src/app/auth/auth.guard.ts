import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { SharedService } from "../shared/shared.service";

export const authGuard : CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const sharedService = inject(SharedService);

    if (authService.isLoggedIn()) {
        return true;
    }

    sharedService.setLoginButtonClicked(true);

    return router.parseUrl('/');
}