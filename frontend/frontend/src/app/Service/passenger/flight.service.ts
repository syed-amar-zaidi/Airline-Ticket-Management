import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  searchFlightsByAirports(departureAirport: string, arrivalAirport: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  searchFlights(destination: string, departureDate: string, flightClass: string): Observable<any[]> {
    // Make an HTTP request here to fetch flights based on the provided parameters
    // Replace this with your actual API endpoint
    const url = `http://localhost:3008/api/search-flight?destination=${destination}&departureDate=${departureDate}&flightClass=${flightClass}`;
    return this.http.get<any[]>(url);
  }
}
