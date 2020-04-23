import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // return this.authService.user$.pipe(
    //   take(1),
    //   map((user) => {
    //     if (user) {
    //       return true;
    //     }
    //     this.router.navigate(['/sign-in']);
    //     return false;
    //   })
    // );
    // if (!this.authService.isAuthenticated()) {
    //   this.router.navigate(['sign-in']);
    //   return false;
    // }
    return true;
  }


}
