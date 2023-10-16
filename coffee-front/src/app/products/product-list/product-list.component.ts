import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // breakpoint: number;

  products = [
    { name: 'Producto 1', description: 'Descripción del producto 1', imageUrl: 'assets/img/bagCoffee1.jpg' },
    { name: 'Producto 2', description: 'Descripción del producto 2', imageUrl: 'assets/img/bag2.jpg' },
    { name: 'Producto 3', description: 'Descripción del producto 3', imageUrl: 'assets/img/bag2.jpg' },
    // Agrega más productos según sea necesario
  ];

  // ngOnInit() {
  //   this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  // }
  // onResize(event) {
  //   this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  // }

}
