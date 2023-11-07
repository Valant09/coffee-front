import { Component } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  constructor(private carService: CarService) {}

  cartItems: { product: { name: string; price: number; image: string }; quantity: number }[] = [
    { product: { name: 'Producto 1', price: 10.99, image: 'product1.jpg' }, quantity: 1 },
    { product: { name: 'Producto 2', price: 15.99, image: 'product2.jpg' }, quantity: 2 },
    { product: { name: 'Producto 3', price: 7.99, image: 'product3.jpg' }, quantity: 1 }
  ];

  showPreview = false;

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  decreaseQuantity(item: { product: { name: string; price: number; image: string }; quantity: number }): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: { product: { name: string; price: number; image: string }; quantity: number }): void {
    item.quantity++;
  }

  removeItem(item: { product: { name: string; price: number; image: string }; quantity: number }): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  showCartPreview() {
    this.showPreview = true;
  }


  hideCartPreview() {
    this.showPreview = false;
  }
}
