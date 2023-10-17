import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  products = [
    { name: 'Producto 1', description: 'Descripción del producto 1',price:123000, imageUrl: 'assets/img/bagCoffee1.jpg' },
    { name: 'Producto 2', description: 'Descripción del producto 2', imageUrl: 'assets/img/bag2.jpg' },
    { name: 'Producto 3', description: 'Descripción del producto 3', imageUrl: 'assets/img/BAG3.avif' },
    { name: 'Producto 4', description: 'Descripción del producto 1', imageUrl: 'assets/img/bagCoffee1.jpg' },
    { name: 'Producto 5', description: 'Descripción del producto 2', imageUrl: 'assets/img/bag2.jpg' },
    { name: 'Producto 6', description: 'Descripción del producto 3', imageUrl: 'assets/img/BAG3.avif' },
    // Agrega más productos según sea necesario
  ];



///Responsive INICIO
  gridColsClass :number = 3; // Clase predeterminada
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setGridColsClass();
  }

  ngOnInit() {
    this.setGridColsClass(); // Configurar la clase inicial al cargar la página
  }

  setGridColsClass() {
    if (window.innerWidth >= 1200) {
      this.gridColsClass = 3; // 3 columnas en pantallas grandes (>= 1200px)
    } else if (window.innerWidth >= 768) {
      this.gridColsClass = 2; // 2 columnas en pantallas medianas (>= 768px)
    } else {
      this.gridColsClass = 1; // 1 columna en pantallas pequeñas
    }
  }

  getGridColsClass() {
    return this.gridColsClass;
  }
  //Responsive FINAL
}
