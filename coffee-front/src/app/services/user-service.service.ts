import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { environment} from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = environment.url;
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }
  constructor(
    private http:HttpClient
  ) { }

  getToken(){
    return localStorage.getItem('token')
  }
  setToken(token:any){
    return localStorage.setItem('token',token)
  }
  removeToken(){
    return localStorage.removeItem('token')
  }
  setUserLoggedIn() {
    localStorage.setItem('loggedIn', 'true');
  }

  setUserLoggedOut() {
    localStorage.removeItem('loggedIn');
  }

  isUserLoggedIn() {
    return localStorage.getItem('loggedIn');
  }

  public postRequest(body:any):Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post<any>(this.url+'/users/create', body,{'headers':headers});
  }



  validateUser(body:any):Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    console.log(body)
    return this.http.post<any>('http://localhost:3000/users/login', body,{'headers':headers});
  }

  getTypeUser() {
    const helper = new JwtHelperService();
    const token = this.getToken();

    if (token) {
      const decodedToken = helper.decodeToken(token);
      const userType = decodedToken.tipo_usuario; // Cambia 'type' al campo específico que deseas obtener
      return userType;
    } else {
      return null; // Manejar el caso en que no haya token
    }
  }
  getUserName() {
    const helper = new JwtHelperService();
    const token = this.getToken();
    if (token) {
      const decodedToken = helper.decodeToken(token);
      const userType = decodedToken.nombre; // Cambia 'type' al campo específico que deseas obtener
      return userType;
    } else {
      return null; // Manejar el caso en que no haya token
    }
  }



}


