import { Component } from '@angular/core';
import { SignUpService } from 'src/app/Service/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  emailExists = false;
  constructor(private signupService:SignUpService)
  {}
  userName = ""
  email = ""
  password = ""
  phone = ""
  // Define an array of genders
  selectedGender: string = ''; // Initialize selectedGender
  genders: string[] = [ 'Male', 'Female', 'Other'];
// Initialize selectedGender with the default value
// Initialize the selected gender

// You might populate this genders array from a service or another data source

  credentials:any
  handleSubmit()
  {
    this.credentials = 
    {
      Name:this.userName,
      Gender:this.selectedGender,
      Email:this.email,
      Password:this.password,
      Contact:this.phone,
      Active:true,
      Role:"Passenger"
    }
      this.signupService.adduser(this.credentials)
      .subscribe(
        (response) => {
          alert("User added successfully");
          this.userName = ""
          this.selectedGender = ''
          this.email = ""
          this.password = ""
          this.phone = ""
          // Handle response here based on backend data
        },
        (error) => {
          alert("User not added"); // Display the error message
          // Handle error here or investigate further
        }
      );
  }

}
