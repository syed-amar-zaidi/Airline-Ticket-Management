import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  // API to add a new flight
  addFlight(newFlight: any): Observable<any> {
    return this.http.post('http://localhost:3008/api/flight', newFlight)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); // Handle errors or modify as needed
        })
      );
  }
  // API to get all flights
  getFlights(): Observable<any> {
    return this.http.get('http://localhost:3008/api/getFlight')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); // Handle errors or modify as needed
        })
      );
  }


  // API to update an existing flight
  updateFlight(Id:any, Flight:any): Observable<any> {
    return this.http.put(`http://localhost:3008/api/flight/${Id}`, Flight)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); // Handle errors or modify as needed
        })
      );
  }

  // API to delete a flight
  deleteFlight(Id:any): Observable<any> {
    return this.http.delete(`http://localhost:3008/api/flight/${Id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); // Handle errors or modify as needed
        })
      );
  }
}
