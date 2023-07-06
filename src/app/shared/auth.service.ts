import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated$ = new BehaviorSubject(true);
  readonly isAuthenicated$ = this._isAuthenticated$.asObservable();

  constructor() { }

  get isAuthenticated(){
    return this._isAuthenticated$.value;
  }

  login(){
    console.log("login clicked");
    this._isAuthenticated$.next(true);
    console.log(this.isAuthenticated);
  }

  logout(){
    console.log("logout clicked");
    this._isAuthenticated$.next(false);
    console.log(this.isAuthenticated);
  }
}
