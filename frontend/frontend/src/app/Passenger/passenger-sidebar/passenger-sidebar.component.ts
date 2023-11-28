import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-sidebar',
  templateUrl: './passenger-sidebar.component.html',
  styleUrls: ['./passenger-sidebar.component.css']
})
export class PassengerSidebarComponent implements OnInit {
  sidebarOpen = false;
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  ngOnInit(): void {
    
  }
}
