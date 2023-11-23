import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  
  // API TO get Users of Airline role.
  getEmployee(): Observable<any> {
    return this.http.get(`http://localhost:3008/api/users/getEmployee`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); // Handle errors or modify as needed
        })
      );
  }
    // API TO get update Users of Airline role.
    updateEmployee(Id:any,Employee:any): Observable<any> {
      return this.http.put(`http://localhost:3008/api/users/${Id}`,Employee)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            return throwError(error); // Handle errors or modify as needed
          })
        );
    }
       // API TO get delete Users of Airline role.
       deleteEmployee(Id:any): Observable<any> {
        return this.http.delete(`http://localhost:3008/api/users/${Id}`)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              return throwError(error); // Handle errors or modify as needed
            })
          );
      }
      adduser(credentials: any): Observable<any> {
        return this.http.post(`http://localhost:3008/api/users/signup`,credentials)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              return throwError(error); // Handle errors or modify as needed
            })
          );
      }
}
