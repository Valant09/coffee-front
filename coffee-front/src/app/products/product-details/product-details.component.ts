import { Component, Input } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interfaces';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent {

  producto: any;
  productoParaCarrito: any = {};

  // @Input() producto!: Producto;
  constructor(private productosService: ProductosService, private route: ActivatedRoute,) {

  }
  getProducto() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

      this.productosService.getProducto(productId).subscribe(data => {
        this.producto = data;
       // console.log(this.producto);
      });
    }

  ngOnInit(): void {
    this.getProducto();
    // console.log(this.getProducto());

  }

  addToCart(producto: Product) {
    if (this.productoParaCarrito && this.productoParaCarrito.cantidad !== undefined) {
      console.log('producto para el carro',this.productoParaCarrito);
      // Actualiza productoParaCarrito con los datos actuales de producto
      if (this.producto) {
        // Actualiza productoParaCarrito con los datos actuales de producto y la cantidad actual
        this.productoParaCarrito = { ...this.producto, cantidad: this.productoParaCarrito.cantidad };
        return this.productosService.addProduct(this.productoParaCarrito);
        // También puedes llamar a tu servicio para agregar al carrito con this.productoParaCarrito
      }
    }
  }
}
