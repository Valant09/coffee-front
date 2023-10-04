import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

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
    return this.http.post<any>(body,{'headers':headers}); 
  }
}


