import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) {}

  adduser(credentials: any): Observable<any> {
    return this.http.post(`http://localhost:3008/api/users/signup`,credentials)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); // Handle errors or modify as needed
        })
      );
  }
}
