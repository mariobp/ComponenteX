import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivate, CanActivateChild, CanLoad } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private _as: AuthService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('In canActivate: ' + state.url);
        return this.checkLoggedIn(state.url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('In canActivateChild: ' + state.url);
        return this.checkLoggedIn(state.url);
    }

    canLoad(route: Route): boolean {
        console.log('In canLoad: ' + route.path);
        return this.checkLoggedIn(route.path);
    }

    checkLoggedIn(url: string): boolean {
        if (this._as.isLoggedIn()) {
            return true;
        }

        // Retain the attempted URL for redirection
        this._as.redirectUrl = url || '/usuarios';
        this.router.navigate(['/login']);
        return false;
    }
}
