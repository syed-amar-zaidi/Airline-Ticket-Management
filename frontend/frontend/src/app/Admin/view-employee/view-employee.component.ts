import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/admin/Employee-Services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})

export class ViewEmployeeComponent implements OnInit {
  constructor(private employeeService:EmployeeService)
  {}
  searchText:any
  employeeData:any
  updateEmployeeData:any
  
  genders: string[] = [ 'Male', 'Female','Other'];
  Id:any
  public Name = ""
  public Gender = ""  
  public Email = ""
  public ContactNumber = ""
  public Password = ""
  
  
  setEmployeeData(Id:any,Name: any, Password:any,Gender:any,Email:any,Contact:any) {
    this.Id = Id;
    this.Name = Name;
    this.Gender = Gender;
    this.Email = Email;
    this.ContactNumber = Contact;
    this.Password = Password;

  }
  async updateEmployeeDetails() {
    this.updateEmployeeData = {
      Name: this.Name,
      Gender:this.Gender,
      Email:this.Email,
      Password:this.Password,
      Contact:this.ContactNumber
    }
    
    await this.employeeService.updateEmployee(this.Id,this.updateEmployeeData)
    .subscribe(
      (response) => {
        alert("Updated Successfully");
      },
      (error) => {
        alert("Not updated"); // Display the error message
        // Handle error here or investigate further
      }
    );
    //this.result = await lastValueFrom(this.EmployeeService.updateEmployeeApi(this.Id, this.updateEmployeeData))
    this.Name = "";
    this.Gender = "";
    this.Email = "";
    this.ContactNumber = "";
    this.Password = "";
    this.getEmployeeData();
  }
  
  async getEmployeeData()
  {
    await this.employeeService.getEmployee()
    .subscribe(
      (response: any[]) => {
        this.employeeData = response;
        // Handle response here based on backend data
      },
      (error) => {
        alert("User not found"); // Display the error message
        // Handle error here or investigate further
      }
    );
  }
  async deleteEmployeeData(Id: any) {
    
    if (confirm("Are you sure you want to delete this data ?") == true) {
      await this.employeeService.deleteEmployee(Id)
      .subscribe(
        (response) => {
          alert("Deleted Successfully");
        // Handle response here based on backend data
        },
        (error) => {
          alert("User not found"); // Display the error message
          // Handle error here or investigate further
        }
      );
      this.getEmployeeData();
    }
  }
  
  ngOnInit(): void {
    this.getEmployeeData();
  }
}

