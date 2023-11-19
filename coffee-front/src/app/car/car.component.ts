import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  myCart$ = this.ProductosService.myCart$;

  constructor(private ProductosService:ProductosService) { }

  ngOnInit(): void {
  }
  totalProduct(price:number, units:number){
    return price * units;
  }

  deleteProduct(nombre_producto:string){
    this.ProductosService.deleteProduct(nombre_producto);
  }
  updatesUnits(operation:string, nombre_producto:string){
    const product = this.ProductosService.finProductByNombre(nombre_producto);
    if(product){
      if(operation === 'minus' && product.cantidad >0){
        product.cantidad = product.cantidad -1;
      }
      if(operation === 'add'){
        product.cantidad = product.cantidad +1;
      }
      if(product.cantidad === 0){
        this.deleteProduct(nombre_producto);
      }

    }

  }

  totalCart(){
    const result = this.ProductosService.totalCart();
    return result;
  }

  totalProductsInCart() {
    const unisPorductos= this.ProductosService.totalProductsInCart();
    return unisPorductos;

    }

}
