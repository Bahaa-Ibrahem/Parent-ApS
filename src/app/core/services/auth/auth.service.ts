import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDetails: BehaviorSubject<any> = new BehaviorSubject(null);
  adminList: BehaviorSubject<string[] | any> = new BehaviorSubject(null);

  constructor(private router: Router) { }

  logOut() {
    localStorage.clear();
    window.open(`FE_URL`, '_self');
    // this.router.navigate(['/login']);
  }

  isAuthenticated() {
    try {
      const token = JSON.parse(localStorage.getItem('token') || '{}');
      const decodedToken = helper.decodeToken(token);
      const isExpired = helper.isTokenExpired(token);
      return !!decodedToken && !isExpired;
    }
    catch (ex) {
      return false;
    }
  }
}
