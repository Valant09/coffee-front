import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  { path: 'recuperar-contrasena', component: RecoverPasswordComponent },
  { path: 'crear-cuenta', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
