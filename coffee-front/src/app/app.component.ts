import { Component } from '@angular/core';
import { NavBarService } from './services/navigation-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffee-front';
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private navBarService: NavBarService) {}

  get hideNavbar(): boolean {
    return this.navBarService.getHideNavbar();
  }
}
