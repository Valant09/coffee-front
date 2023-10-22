import { Component, Input } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  producto: any
  ;
  // @Input() producto!: Producto;
  constructor(private productosService: ProductosService, private route: ActivatedRoute,) {

  }
  getProducto() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

      this.productosService.getProducto(productId).subscribe(data => {
        this.producto = data;
        console.log(this.producto);
      });
    }

  ngOnInit(): void {
    this.getProducto();
    // console.log(this.getProducto());
    
  }
}