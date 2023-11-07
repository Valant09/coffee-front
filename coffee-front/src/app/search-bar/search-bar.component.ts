import {Component, EventEmitter, Output,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  
  menuTipe:string="default";
  loggedIn: boolean = false;
  showNavigation: boolean=false;
  isLoginPage: boolean = false;
 



  constructor(private router:Router,
    private userServiceService:UserServiceService,
    private cdr: ChangeDetectorRef) {
      
    }

  onSearch(searchTerm: string) {
    this.search.emit(searchTerm);
  }



   logout() {
    this.userServiceService.setUserLoggedOut();
    this.menuTipe="default"
    this.userServiceService.removeToken();
    this.router.navigate(['/login']);
    console.log('cerro cesion el usuario', this.loggedIn);
    // Aquí también podrías realizar otras acciones necesarias al cerrar sesión
  }
  

  ngOnInit():void{
    this.userServiceService.isLoggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      this.isLoginPage = this.router.url === '/login';
      this.cdr.detectChanges();
    });
  
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        console.warn(val.url)
        if(val.url.includes('login')|| val.url.includes('register')){
          console.log('in login area')
          this.menuTipe="login"
          this.showNavigation=false;
        }else{
          console.log('not in login area')
          this.menuTipe="default"
          this.showNavigation=true;
        }
      }
    });
    console.log('LoginComponent initialized');
  }
}
