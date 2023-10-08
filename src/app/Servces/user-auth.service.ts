import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  // 
  usserLoggerBehavior: BehaviorSubject<boolean>;
  constructor() {
    this.usserLoggerBehavior = new BehaviorSubject<boolean>(this.isUserLogged)
  }

  login(userEmail: string, userPassword: string) {
    let token: string = "125487";
    localStorage.setItem("userToken", token);
    this.usserLoggerBehavior.next(true);
  }

  logout() {
    localStorage.removeItem("userToken");
    this.usserLoggerBehavior.next(false);
  }
  get isUserLogged(): boolean {
    return (localStorage.getItem("userToken") ? true : false)
  }
  getUserLoggedStatus(): Observable<boolean> {
    return this.usserLoggerBehavior.asObservable();
  }
}
