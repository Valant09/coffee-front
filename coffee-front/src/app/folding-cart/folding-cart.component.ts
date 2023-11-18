import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-folding-cart',
  templateUrl: './folding-cart.component.html',
  styleUrls: ['./folding-cart.component.css']
})
export class FoldingCartComponent {

  myCart$ = this.ProductosService.myCart$;

  constructor(private ProductosService:ProductosService) { }

  ngOnInit(): void {
  }

}
