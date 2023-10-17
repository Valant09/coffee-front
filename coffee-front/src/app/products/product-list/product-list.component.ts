import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productos!: any[
  ];

  constructor(private productosService: ProductosService) { }

  getProductos() {

    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    });
  }

  ngOnInit() {

    this.getProductos();
    this.setGridColsClass(); // Configurar la clase inicial al cargar la página
  }

  ///Responsive INICIO
  gridColsClass: number = 3; // Clase predeterminada
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setGridColsClass();
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
