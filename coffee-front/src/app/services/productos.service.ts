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

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  getProductos(search = ""): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let params = new HttpParams();
    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<any>(`${this.url}/products`, { headers: headers, params: params });
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
    if (this.mylist.length === 0) {
      product.cantidad = 1;
      this.mylist.push(product);
      this.myCart.next(this.mylist);
      console.log('llegue al servicio', product);
    } else {
      const repetido = this.mylist.find((element) => {
        return element.nombre_producto === product.nombre_producto;
      });
      if (repetido) {
        repetido.cantidad = Number(repetido.cantidad) + 1;
        this.myCart.next(this.mylist);
      } else {
        product.cantidad = 1;
        this.mylist.push(product);
        this.myCart.next(this.mylist);
      }
    }
    localStorage.setItem('myCart', JSON.stringify(this.mylist)); // Almacenar en local storage
  }

  deleteProduct(nombre_producto: string) {
    this.mylist = this.mylist.filter((product) => {
      return product.nombre_producto != nombre_producto;
    });
    this.myCart.next(this.mylist);
    localStorage.setItem('myCart', JSON.stringify(this.mylist)); // Actualizar local storage
  }

  finProductByNombre(nombre_producto:string){

    return this.mylist.find((element)=>{
      return element.nombre_producto === nombre_producto;
    });
  }

  totalCart(){
    const total= this.mylist.reduce(function(acc, product){return acc + Number(product.valorLote * product.cantidad);},0);
    return total;
  }

  // Cargar desde local storage al iniciar la aplicación
  loadFromLocalStorage() {
    const storedCart = localStorage.getItem('myCart');
    if (storedCart) {
      this.mylist = JSON.parse(storedCart);
      this.myCart.next(this.mylist);
    }
  }
  totalProductsInCart() {
    const total = this.mylist.reduce(function(acc, product) { return acc + Number(product.cantidad); }, 0);
    return total;
  }
}
