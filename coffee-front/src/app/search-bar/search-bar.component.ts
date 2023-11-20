import {Component, EventEmitter, Output,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';


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
  viewCard: boolean = false;
  userType: any;
  nameUser: any;



  constructor(private router:Router,
    private userServiceService:UserServiceService,
    private cdr: ChangeDetectorRef,
    private ProductosService:ProductosService) {

    }

    ontoggleViewCard() {
      this.viewCard = !this.viewCard;
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
      this.userType = this.userServiceService.getTypeUser();
      this.nameUser = this.userServiceService.getUserName();

      console.log('Usuario logueado:', this.loggedIn);
      console.log('Tipo de usuario:', this.userType);
      console.log('Nombre de usuario:', this.nameUser);
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

  showModal: boolean = false; // Variable para controlar la ventana modal

  openCarModal() {
    this.showModal = true;
  }

  closeCarModal() {
    this.showModal = false;
  }
  totalProductsInCart() {
    const unisPorductos= this.ProductosService.totalProductsInCart();
    return unisPorductos;

    }
}

