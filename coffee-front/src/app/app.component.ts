import {Component,EventEmitter, Output} from '@angular/core';
import { NavBarService } from './services/navigation-bar.service';
import {CarService} from "./services/car.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  title = 'coffee-front';
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private navBarService: NavBarService, carService: CarService) {}
  showPreview = false;
  get hideNavbar(): boolean {
    return this.navBarService.getHideNavbar();
  }
  onSearch(searchTerm: string) {
    this.search.emit(searchTerm);
  }
  showCartPreview() {
    this.showPreview = true;
  }


  hideCartPreview() {
    this.showPreview = false;
  }



}
