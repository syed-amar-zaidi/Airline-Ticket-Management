import { Component } from '@angular/core';
import { FlightService } from 'src/app/Service/passenger/flight.service';
import { BookingService } from 'src/app/Service/passenger/booking.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  flights: any[] = [];
  destination: string = '';
  departureDate: string = '';
  flightClass: string = 'Economy'; // Default value

  constructor(
    private flightService: FlightService,
    private bookingService: BookingService
  ) {}

  searchFlights() {
    this.flightService.searchFlights(this.destination, this.departureDate, this.flightClass)
      .subscribe(
        (data) => {
          this.flights = data; // Assign received flights data to display
          console.log('Search results:', data);
        },
        (error) => {
          console.error('Error during search:', error);
          // Handle error if needed
        }
      );
  }

  bookFlight(flight: any) {
    if (flight.availableSeats <= 0) {
      alert('Not available. No seats left for this flight.');
      return;
    }

    this.bookingService.addBooking(flight.id).subscribe(
      (response) => {
        flight.availableSeats--; // Update available seats locally
        alert('Booking successful!');
      },
      (error) => {
        console.error('Error during booking:', error);
        // Handle booking error if needed
      }
    );
  }
}
