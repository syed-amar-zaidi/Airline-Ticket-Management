import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AirlineDashboardComponent } from './Airline/airline-dashboard/airline-dashboard.component';
import { AirlineSidebarComponent } from './Airline/airline-sidebar/airline-sidebar.component';
import { AirlineSidebarPanelComponent } from './Airline/airline-sidebar-panel/airline-sidebar-panel.component';



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
    AdminDashboardComponent,
    AirlineDashboardComponent,
    AirlineSidebarComponent,
    AirlineSidebarPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
