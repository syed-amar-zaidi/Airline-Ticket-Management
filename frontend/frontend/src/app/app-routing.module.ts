import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Shared/home/home.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';
import { SignUpComponent } from './Shared/sign-up/sign-up.component';
import { AboutComponent } from './Shared/about/about.component';
import { ContactUsComponent } from './Shared/contact-us/contact-us.component';
import { AdminSidebarPanelComponent } from './Admin/admin-sidebar-panel/admin-sidebar-panel.component';
import { AddEmployeeComponent } from './Admin/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './Admin/view-employee/view-employee.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AirlineSidebarPanelComponent } from './Airline/airline-sidebar-panel/airline-sidebar-panel.component';
import { AddFlightComponent } from './Airline/add-flight/add-flight.component';
import { ViewFlightComponent } from './Airline/view-flight/view-flight.component';
import { PassengerSidebarPanelComponent } from './Passenger/passenger-sidebar-panel/passenger-sidebar-panel.component';
import { FlightSearchComponent } from './Passenger/flight-search/flight-search.component';
import { UserProfileComponent } from './Airline/user-profile/user-profile.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'admin-sidebar',component:AdminSidebarPanelComponent,
  children:
  [
    {path:'admin-dashboard',component:AdminDashboardComponent},
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'view-employee',component:ViewEmployeeComponent},
  ]},

  {path:'airline-sidebar',component:AirlineSidebarPanelComponent,
  children:
  [
    {path:'user-profile',component:UserProfileComponent},
    {path:'add-flight',component:AddFlightComponent},
    {path:'view-flight',component:ViewFlightComponent},
  ]},

  {path:'passenger-sidebar',component:PassengerSidebarPanelComponent,
  children:
  [
    {path:'user-profile',component:UserProfileComponent},
    {path:'flight-search',component:FlightSearchComponent},
    // {path:'add-flight',component:AddFlightComponent},
    // {path:'view-flight',component:ViewFlightComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
