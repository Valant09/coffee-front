import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formValid = false;
  res: any;
  usuarioCreado: boolean = false;

  formularioPersona = new FormGroup({
    nombre_usuario: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s]+$/)]),
    apellido_usuario: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s]+$/)]),
    documento_usuario: new FormControl(0, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]),
    correo_usuario: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tipo_documento: new FormControl('CC', [Validators.required, Validators.maxLength(80)]),
    contrasena_usuario: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    tipo_usuario: new FormControl('C', [Validators.required, Validators.maxLength(80)]),
  });

  constructor(private userService: UserServiceService, private router: Router) {
    this.formularioPersona.valueChanges.subscribe(() => {
      this.formValid = this.formularioPersona.valid;
    });
  }



  addPersona() {
    // console.log(this.formularioPersona.value);
    if (this.formularioPersona.valid) {
      const formData = this.formularioPersona.value;
      console.log(formData);

      this.enviarSolicitud(formData);
    } else {
      // El formulario no es válido, muestra un mensaje de error o realiza alguna otra acción.
    }
  }

  enviarSolicitud(formData: any) {
    this.userService.postRequest(formData)
      .subscribe(res => {
        this.res = res;
        console.log("Res:", this.res);

        // Llama al método para mostrar la alerta y verifica la propiedad "message"
        this.mostrarAlerta(this.res.message === "Usuario creado correctamente");
      },
        error => {
          console.error(error);
          console.log('Error al Registrar usuario', 'Error de Registro');
        });
  }

  mostrarAlerta(esExitoso: boolean) {
    if (esExitoso) {
      Swal.fire({
        title: 'Registro Exitoso',
        text: '¡El usuario se ha registrado con éxito!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        // Redirige al usuario a la página de inicio de sesión
        this.router.navigate(['/login']);
      });
    } else {
      Swal.fire({
        title: 'Error en el registro',
        text: 'Hubo un problema al registrar al usuario.',
        icon: 'error'
      });
    }
  }
}

