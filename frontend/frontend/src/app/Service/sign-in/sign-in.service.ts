import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private http: HttpClient) {}

  loginuser(credentials: any): Observable<any> {
    return this.http.get(`http://localhost:3008/api/users/signin/${credentials.email}/${credentials.password}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); // Handle errors or modify as needed
        })
      );
  }
}
