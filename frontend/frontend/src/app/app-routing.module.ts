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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'admin-sidebar',component:AdminSidebarPanelComponent,
  children:
  [
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'view-employee',component:ViewEmployeeComponent},
    {path:'admin-dashboard',component:AdminDashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
