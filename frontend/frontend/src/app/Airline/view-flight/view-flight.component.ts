import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/Service/airline/Flight-Services/flight.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css'],
})
export class ViewFlightComponent implements OnInit {
  constructor(private flightService: FlightService) {}
  searchText: any;
  flightData: any;
  updateFlightData: any;

  flightclass: string[] = ['Economy', 'Business', 'First Class'];

  Id: any;
  public Airline = ""
  public FlightNumber = ""
  public DepartureAirport = ""
  public ArrivalAirport = ""
  public Destination = ""
  public DepartureDate = ""
  public ArrivalDate = ""
  public FlightClass = ""
  public AvailableSeats = ""
  public Price = ""

  setFlightData(Id: any, Airline: any, FlightNumber: any, DepartureAirport: any, ArrivalAirport: any, Destination: any, DepartureDate: any, ArrivalDate: any, FlightClass: any, AvailableSeats: any, Price: any) {
    this.Id = Id;
    this.Airline = Airline;
    this.FlightNumber = FlightNumber;
    this.DepartureAirport = DepartureAirport;
    this.ArrivalAirport = ArrivalAirport;
    this.Destination = Destination;
    this.DepartureDate = DepartureDate;
    this.ArrivalDate = ArrivalDate;
    this.FlightClass = FlightClass;
    this.AvailableSeats = AvailableSeats;
    this.Price = Price;
  }

  async updateFlightDetails() {
    this.updateFlightData = {
      Airline: this.Airline,
      FlightNumber: this.FlightNumber,
      DepartureAirport: this.DepartureAirport,
      ArrivalAirport: this.ArrivalAirport,
      Destination: this.Destination,
      DepartureDate: this.DepartureDate,
      ArrivalDate: this.ArrivalDate,
      FlightClass: this.FlightClass,
      AvailableSeats: this.AvailableSeats,
      Price: this.Price,
    };

    await this.flightService.updateFlight(this.Id, this.updateFlightData)
      .subscribe(
        (response) => {
          alert('Updated Successfully');
        },
        (error) => {
          alert('Not updated');
        }
      );
    this.Airline = "";
    this.FlightNumber = "";
    this.DepartureAirport = "";
    this.ArrivalAirport = "";
    this.Destination = "";
    this.DepartureDate = "";
    this.ArrivalDate = "";
    this.FlightClass = "";
    this.AvailableSeats = "";
    this.Price = "";
    this.getFlightData();
  }

  async getFlightData() 
  {
    await this.flightService.getFlights()
    .subscribe(
      (response: any[]) => {
        this.flightData = response;
        // Handle response here based on backend data
      },
      (error) => {
        alert('Flight not found'); // Display the error message
        // Handle error here or investigate further
      }
    );
  }

  async deleteFlightData(Id: any) {
    if (confirm('Are you sure you want to delete this data ?') == true) {
      await this.flightService.deleteFlight(Id)
      .subscribe(
        (response) => {
          alert('Deleted Successfully');
          // Handle response here based on backend data
        },
        (error) => {
          alert('Flight not found'); // Display the error message
          // Handle error here or investigate further
        }
      );
      this.getFlightData();
    }
  }

  ngOnInit(): void {
    this.getFlightData();
  }
}
