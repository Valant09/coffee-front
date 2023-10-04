import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = environment.url;

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

  validateUser(body:any):Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    console.log(body)
    return this.http.post(this.url, body,{'headers':headers}); 
  }
}


