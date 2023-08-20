import { HttpClient } from '@angular/common/http';
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

  constructor(private router: Router, private http: HttpClient) { }

  login(data: any) {
    return this.http.post('https://reqres.in/api/login', data);
  }

  logOut() {
    localStorage.clear();
    window.open(`FE_URL`, '_self');
    // this.router.navigate(['/login']);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }
}
