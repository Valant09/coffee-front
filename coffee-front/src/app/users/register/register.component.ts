import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formValid = false;
  res: any;

  formularioPersona = new FormGroup({
    nombre_usuario: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s]+$/)]),
    apellido_usuario: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s]+$/)]),
    documento_usuario: new FormControl(0, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]),
    correo_usuario: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tipo_documento: new FormControl('CC', [Validators.required, Validators.maxLength(80)]),
    contrasena_usuario: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    tipo_usuario: new FormControl('C', [Validators.required, Validators.maxLength(80)]),
  });

  constructor(private userService: UserServiceService) {
    this.formularioPersona.valueChanges.subscribe(() => {
      this.formValid = this.formularioPersona.valid;
    });
  }

  addPersona() {
    if (this.formularioPersona.valid) {
      const formData = this.formularioPersona.value;
      console.log(formData);

      this.userService.postRequest(formData)
        .subscribe(res => {
          this.res = res;
          console.log(this.res);
        },
          error => {
            console.error(error);
            console.log('Error al Registrar usuario', 'Error de Registro');
          });
    } else {
      // El formulario no es válido, muestra un mensaje de error o realiza alguna otra acción.
    }
  }
}

