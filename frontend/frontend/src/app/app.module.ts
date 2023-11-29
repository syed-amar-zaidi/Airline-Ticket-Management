import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';
import { SignUpComponent } from './Shared/sign-up/sign-up.component';
import { HomeComponent } from './Shared/home/home.component';
import { AboutComponent } from './Shared/about/about.component';
import { ContactUsComponent } from './Shared/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminSidebarComponent } from './Admin/admin-sidebar/admin-sidebar.component';
import { AdminSidebarPanelComponent } from './Admin/admin-sidebar-panel/admin-sidebar-panel.component';
import { AddEmployeeComponent } from './Admin/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './Admin/view-employee/view-employee.component';
import { AirlineSidebarComponent } from './Airline/airline-sidebar/airline-sidebar.component';
import { AirlineSidebarPanelComponent } from './Airline/airline-sidebar-panel/airline-sidebar-panel.component';
import { AddFlightComponent } from './Airline/add-flight/add-flight.component';
import { ViewFlightComponent } from './Airline/view-flight/view-flight.component';
import { PassengerSidebarComponent } from './Passenger/passenger-sidebar/passenger-sidebar.component';
import { PassengerSidebarPanelComponent } from './Passenger/passenger-sidebar-panel/passenger-sidebar-panel.component';
import { FlightSearchComponent } from './Passenger/flight-search/flight-search.component';
import { UserProfileComponent } from './Airline/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    NavbarComponent,
    AdminSidebarComponent,
    AdminSidebarPanelComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AirlineSidebarComponent,
    AirlineSidebarPanelComponent,
    AddFlightComponent,
    ViewFlightComponent,
    PassengerSidebarComponent,
    PassengerSidebarPanelComponent,
    FlightSearchComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
