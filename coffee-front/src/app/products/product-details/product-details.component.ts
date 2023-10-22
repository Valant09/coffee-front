import { Component, Input } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productos!: any[
  ];
  // @Input() producto!: Producto;
  constructor(private productosService: ProductosService, private route: ActivatedRoute,) {

  }

  getProductos() {
    //Modify for send headers with product ID, for one product request
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    });
  }



  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
  }
}