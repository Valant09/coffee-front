import {Component, EventEmitter, Output} from '@angular/core';
import { NavBarService } from '../services/navigation-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private navBarService: NavBarService) {}

  get hideNavbar(): boolean {
    return this.navBarService.getHideNavbar();
  }
  onSearch(searchTerm: string) {
    this.search.emit(searchTerm);
  }


}
