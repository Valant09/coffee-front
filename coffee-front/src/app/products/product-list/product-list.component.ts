import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  search: string = 'valor de búsqueda inicial'; // Reemplaza 'valor de búsqueda inicial' con el valor que desees

  productos!: any[
  ];

  constructor(private productosService: ProductosService, private router: Router) { }

  getProductos(search: string) {
    if (!search) {
      search = ""; // Si search está vacío, se establece como una cadena vacía
    }
    this.productosService.getProductos(search).subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    });
  }
  goToDetails(id: number): void {
    this.router.navigate(['/productos', id]);
  }

  ngOnInit() {
    this.getProductos(''); // Llama a getProductos con una cadena vacía para obtener todos los productos al inicio
    this.setGridColsClass(); // Configurar la clase inicial al cargar la página
  }

  ///Responsive INICIO
  gridColsClass: number = 4; // Clase predeterminada
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setGridColsClass();
  }



  setGridColsClass() {
    if (window.innerWidth >= 1200) {
      this.gridColsClass = 4; // 3 columnas en pantallas grandes (>= 1200px)
    } else if (window.innerWidth >= 768) {
      this.gridColsClass = 3; // 2 columnas en pantallas medianas (>= 768px)
    } else {
      this.gridColsClass = 2; // 1 columna en pantallas pequeñas
    }
  }

  getGridColsClass() {
    return this.gridColsClass;
  }

  //Responsive FINAL
}
