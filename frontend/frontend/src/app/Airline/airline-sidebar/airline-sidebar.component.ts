import { Component } from '@angular/core';

@Component({
  selector: 'app-airline-sidebar',
  templateUrl: './airline-sidebar.component.html',
  styleUrls: ['./airline-sidebar.component.css']
})
export class AirlineSidebarComponent {
  sidebarOpen = false;
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  ngOnInit(): void {
    
  }
}
