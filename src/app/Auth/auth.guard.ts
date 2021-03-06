import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {    
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
