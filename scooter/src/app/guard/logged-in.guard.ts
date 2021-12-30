import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionSbService} from "../service/session-sb.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {


  constructor(private sessionSbService: SessionSbService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.sessionSbService.getTokenFromBrowserStorage())
    if (this.sessionSbService.getTokenFromBrowserStorage() == "" || this.sessionSbService.getTokenFromBrowserStorage() == null){
      this.router.navigate(['sign-in']);
    return false;
    }
    return true;

  }

}
