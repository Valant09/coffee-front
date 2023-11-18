import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'http://localhost:3000'; // Cambia esta URL por la de tu API

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(`${this.url}/products`, { headers: headers });
  }

  getProducto(id: number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('id', id);
    return this.http.get<any>(`${this.url}/products/id`, { headers: headers, params: params });
  }



  crearProducto(producto: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.url}/productos`, producto, { headers: headers });
  }

  actualizarProducto(id: string, producto: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(`${this.url}/productos/${id}`, producto, { headers: headers });
  }

  eliminarProducto(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete<any>(`${this.url}/productos/${id}`, { headers: headers });
  }

   //LISTA CARRITO
   private mylist:Product[] = [];
   //CARRITO OBSERVABLE
   private myCart = new BehaviorSubject<Product[]>([]);
   myCart$ = this.myCart.asObservable();

  addProduct(product: Product) {
    console.log('llegue al servicio', product);
    console.log('mylist', this.mylist);
  }
}
