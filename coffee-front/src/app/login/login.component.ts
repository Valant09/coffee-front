import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {

  todo:any;

  constructor(
    private userServiceService:UserServiceService,
    private router:Router
  ) { }
  ngOnInit() {
    console.log('LoginComponent initialized');
  }

  login(username:string,password:string){
    if(!username || !password){
      alert('Ingrese los datos completos')
    }
    else{

      const encryptedUsername = CryptoJS.AES.encrypt(username, environment.secretKey).toString();
      const encryptedPassword = CryptoJS.AES.encrypt(password, environment.secretKey).toString();
      
      console.log({
        username: username,
        password: password 
      });
      
      this.userServiceService.validateUser({
        username: encryptedUsername,
        password: encryptedPassword 
      }).subscribe(res=>{
        if(!res.token){
          alert('El usuario no existe, intente de nuevo')
        }else{
          this.userServiceService.setToken(res.token)
          console.log("home!!!")
          // this.router.navigate(['home'])
        }
      })
      // Borrar cuando se implemente la api
      // this.router.navigate(['home'])
    }
    
  }
  // onSubmit() {
  //   if (this.username && this.password) {
  //     const encryptedUsername = CryptoJS.AES.encrypt(this.username, 'secret key').toString();
  //     const encryptedPassword = CryptoJS.AES.encrypt(this.password, 'secret key').toString();
  //     console.log('Username: ' + this.username);
  //     console.log(encryptedUsername);
  //     console.log(encryptedPassword);
  //     // Send encryptedUsername and encryptedPassword to the server using HTTPS
  //   }
  // }
}
