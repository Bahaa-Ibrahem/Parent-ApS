import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {

  constructor(private router: Router, private authService: AuthService) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (localStorage.getItem('token')) {
      return combineLatest(this.authService.userDetails$, this.authService.adminList$).pipe(map(([user, adminList]) => {
        if (user) {
          if (!adminList.includes(user.emailAddress)) {
            this.router.navigateByUrl('/');
            return true;
          }

          return true;
        }

        return false;
      }));
    } else {
      let token: any = '';

      if (state.url.includes('token')) {
        token = state.url.split('token=').pop();

        if (token) {
          localStorage.setItem('token', token);
          this.router.navigateByUrl('/');
          return true;
        } else {
          window.open(`FE_URL`, '_self');
        }
      } else {
        window.open(`FE_URL`, '_self');
      }

      return false;
    }
  }

}