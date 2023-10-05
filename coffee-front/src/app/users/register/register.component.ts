import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Persona } from '../persona.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  res:any
  model = new Persona('','','','','','C', { contrasena_usuario:''});

  constructor(private userService: UserServiceService) { }

  addPersona() {
    console.log(this.model)
    this.userService.postRequest(this.model)
      .subscribe(res => {
        this.res = res;
        console.log(this.res);
      },
      error => {
        console.error(error);
        console.log('Error al Registrar estudiante','Error de Registro');
      }
      );

      
    }
    
    onSubmit(personaForm:NgForm){
      personaForm.control.markAsTouched();
    }








}
