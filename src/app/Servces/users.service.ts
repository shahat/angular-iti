import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpheader = {}; // handle the headers like content-type also more security headers
  constructor(private httpclient: HttpClient) {
    this.httpheader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  signUpUser(user: Iuser): Observable<Iuser> {
    console.log("hi from userService");
    return this.httpclient.post<Iuser>(`${environment.BaseApiURL}/users`, JSON.stringify(user),
      this.httpheader).pipe(  // using pipe for error handleing 
        retry(3), // for how many request you make 
        catchError((err) => {
          return throwError(() => {
            return new Error('Error while signing up')
          })
        })
      )

  }
}
