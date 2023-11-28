import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  // Get Profile
  getUserProfile(Id: any): Observable<any> {
    return this.http.get(`http://localhost:3008/api/get-profile/${Id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  // Update Profile
  updateUserProfile(Id:any, data:any): Observable<any> {
    return this.http.put(`http://localhost:3008/api/update-profile/${Id}`, data)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); 
        })
      );
  }

  // Delete Profile
  deleteUserProfile(Id:any): Observable<any> {
    return this.http.delete(`http://localhost:3008/api/delete-profile/${Id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); 
        })
      );
  }
}