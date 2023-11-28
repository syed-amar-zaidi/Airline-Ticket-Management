import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient) {}

  addBooking(newBooking: any): Observable<any> {
    return this.http.post('http://localhost:3008/api/booking', newBooking)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); // Handle errors or modify as needed
        })
      );
  }
}
