import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(searchTerm: string) {
    this.search.emit(searchTerm);
  }

}
