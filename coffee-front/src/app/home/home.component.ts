import { Component, EventEmitter, Output, OnInit,Renderer2  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('input[name="slider"]');
    const maxIndex = slides.length;

    setInterval(() => {
      if ('checked' in slides[currentIndex]) {
        (slides[currentIndex] as HTMLInputElement).checked = false;
        currentIndex = (currentIndex + 1) % maxIndex;
        (slides[currentIndex] as HTMLInputElement).checked = true;
      }
    }, 3000); // Cambiar cada 3 segundos
  }

  onSearch(searchTerm: string) {
    this.search.emit(searchTerm);
  }
}
