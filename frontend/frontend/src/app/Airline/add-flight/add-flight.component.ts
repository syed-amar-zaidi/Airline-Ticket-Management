import { Component } from '@angular/core';
import { FlightService } from 'src/app/Service/airline/Flight-Services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  constructor(private flightService:FlightService){}
  airline = ""
  flightNumber = ""
  departureAirport = ""
  arrivalAirport = ""
  destination = ""
  departureDate = ""
  arrivalDate = ""
  // Define an array of genders
  selectedFlightClass: string = ''; // Initialize selectedGender
  flightclass: string[] = [ 'Economy', 'Business', 'First Class'];
// Initialize selectedGender with the default value
// Initialize the selected gender
  availableSeats = ""
  price = ""

// You might populate this genders array from a service or another data source

newFlight:any
  handleSubmit()
  {
    this.newFlight = 
    {
      Airline: this.airline,
      FlightNumber: this.flightNumber,
      DepartureAirport: this.departureAirport,
      ArrivalAirport: this.arrivalAirport,
      Destination: this.destination,
      DepartureDate: this.departureDate,
      ArrivalDate: this.arrivalDate,
      FlightClass:this.selectedFlightClass,
      Active: true,
      AvailableSeats: this.availableSeats,
      Price: this.price
    }
      this.flightService.addFlight(this.newFlight)
      .subscribe(
        (response) => {
          alert("Flight added successfully");
          this.airline = ""
          this.flightNumber = ''
          this.departureAirport = ""
          this.arrivalAirport = ""
          this.destination = ""
          this.departureDate = ""
          this.arrivalDate = ""
          this.selectedFlightClass = ''
          this.availableSeats = ""
          this.price = ""
          // Handle response here based on backend data
        },
        (error) => {
          alert("Flight not added"); // Display the error message
          // Handle error here or investigate further
        }
      );
  }
}
