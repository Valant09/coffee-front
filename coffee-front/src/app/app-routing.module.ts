import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { AppComponent } from './app.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CarComponent } from "./car/car.component";
import { authGuard } from "./auth.guard";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { RegisterProductComponent } from "./products/register-product/register-product.component";


const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'productos/:id', component: ProductDetailsComponent },
  { path: 'car', component: CarComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'register-product', component: RegisterProductComponent },
  {
    path: 'search',
    component: SearchBarComponent,
    children: [
      { path: 'products', component: ProductListComponent },
      { path: 'productos/:id', component: ProductDetailsComponent },
      { path: 'home', component: HomeComponent },
    ],
  },
  { path: 'app', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
