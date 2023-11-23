import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  hideLoginButton = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Check the current route to hide the Login button when on sign-in or sign-up page
      this.hideLoginButton = event.url.includes('/sign-in') || event.url.includes('/sign-up');
    });
  }
}
