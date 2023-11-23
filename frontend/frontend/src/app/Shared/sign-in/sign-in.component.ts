import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { SignInService } from 'src/app/Service/sign-in/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  constructor(private signInService:SignInService,private router:Router)
  {

  }
  email:any
  password:any
  credentials:any
  loginResult:any
  async formSubmission() {
    this.credentials = {
      email: this.email,
      password: this.password
    };
  
    this.signInService.loginuser(this.credentials)
      .subscribe(
        (response) => {
          alert("Login Successfully");
          if(response.Role == "Admin")
          {
            this.router.navigate(['/admin-sidebar'])
          }
          else if(response.Role == "Passenger")
          {
            alert("Passenger Login")
          }
          else if (response.Role == "Airline")
          {
            //alert("Employee Login")
            this.router.navigate(['/airline-sidebar'])
          }
          

          // Handle response here based on backend data
        },
        (error) => {
          alert("User not found"); // Display the error message
          // Handle error here or investigate further
        }
      );
  }
  
  ngOnInit(): void {
    
  }
  
}
