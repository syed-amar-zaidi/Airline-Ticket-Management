import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/Service/airline/Profile-Service/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any = {};
  userId: any;
  Name: string = '';
  Gender: string = '';
  Email: string = '';
  Password: string = '';
  Contact: string = '';

  genders: string[] = [ 'Male', 'Female', 'Other'];


  constructor(
    private userProfileService: ProfileService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.getUserProfileData(this.userId);
    });
  }

  getUserProfileData(userId: any): void {
    this.userProfileService.getUserProfile(userId).subscribe(
      (data: any) => {
        this.userProfile = data;
        this.assignUserProfileData();
      },
      (error: any) => {
        console.error('Error fetching user profile data:', error);
        // Handle error gracefully
      }
    );
  }

  assignUserProfileData(): void {
    this.Name = this.userProfile.name;
    this.Gender = this.userProfile.gender;
    this.Email = this.userProfile.email;
    this.Password = this.userProfile.password;
    this.Contact = this.userProfile.contact;
    // Assign other profile data properties accordingly
  }

  updateProfileDetails() {
    const updatedProfileData = {
      name: this.Name,
      gender: this.Gender,
      email: this.Email,
      password: this.Password,
      contact: this.Contact
      // Add other fields as per your user profile data structure
    };
  
    this.userProfileService.updateUserProfile(this.userId, updatedProfileData).subscribe(
      (response: any) => {
        console.log('Profile updated successfully:', response);
        // Refresh user profile data after update
        this.getUserProfileData(this.userId);
      },
      (error: any) => {
        console.error('Error updating profile:', error);
        // Handle error gracefully
      }
    );
  }

  // deleteProfileData() {
  //   if (confirm('Are you sure you want to delete your profile?')) {
  //     this.userProfileService.deleteUserProfile(this.userId).subscribe(
  //       (response: any) => {
  //         console.log('Profile deleted successfully:', response);
  //         // Perform any necessary actions after profile deletion
  //       },
  //       (error: any) => {
  //         console.error('Error deleting profile:', error);
  //         // Handle error gracefully
  //       }
  //     );
  //   }
  // }
}
