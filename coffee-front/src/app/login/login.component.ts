import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {
  username?: string;
  password?: string;


  constructor() { }
  ngOnInit() {
  }
  onSubmit() {
    if (this.username && this.password) {
      const encryptedUsername = CryptoJS.AES.encrypt(this.username, 'secret key').toString();
      const encryptedPassword = CryptoJS.AES.encrypt(this.password, 'secret key').toString();
      console.log(encryptedUsername);
      console.log(encryptedPassword);
      // Send encryptedUsername and encryptedPassword to the server using HTTPS
    }
  }
}
