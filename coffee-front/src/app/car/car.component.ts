import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  cartItems: any[] = [
    // Ejemplo de productos en el carrito
    { name: 'Producto 1', price: 10.99, image: 'product1.jpg' },
    { name: 'Producto 2', price: 15.99, image: 'product2.jpg' },
    { name: 'Producto 3', price: 7.99, image: 'product3.jpg' }
  ];

  // Define la función calculateTotal dentro de la clase
  calculateTotal(): number {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }

  removeItem(product: any): void {
    // Lógica para eliminar un producto del carrito
  }
}
