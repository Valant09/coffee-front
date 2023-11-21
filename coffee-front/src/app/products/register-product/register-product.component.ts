import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {
  formValid = false;
  res: any;
  productoCreado: boolean = false;

  formularioProducto = new FormGroup({
    nombre_producto: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s]+$/)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s]+$/)]),
    categoria: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    valor_lote_producto: new FormControl(0, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]),
    stock: new FormControl(0, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]),

  });

  constructor(private productosService: ProductosService, private router: Router) {
    this.formularioProducto.valueChanges.subscribe(() => {
      this.formValid = this.formularioProducto.valid;
    });
  }

  addProducto() {
    // console.log(this.formularioProducto.value);
    if (this.formularioProducto.valid) {
      const formData = this.formularioProducto.value;
      console.log(formData);

      this.enviarSolicitud(formData);
    } else {
      // El formulario no es válido, muestra un mensaje de error o realiza alguna otra acción.
    }
  }
  enviarSolicitud(formData: any) {
    this.productosService.crearProducto(formData)
      .subscribe((res: any) => {
        this.res = res;
        console.log("Res:", this.res);

        // Llama al método para mostrar la alerta y verifica la propiedad "message"
        this.mostrarAlerta(this.res.message === "Producto creado correctamente");
      },
        error => {
          console.error(error);
          console.log('Error al Registrar producto', 'Error de Registro');
        });
  }
  mostrarAlerta(valido: boolean) { 
    if (valido) {
      Swal.fire({
        title: 'Producto registrado',
        text: 'El producto se ha registrado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['/products']);
        }
      });
    } else {
      Swal.fire({
        title: 'Error al registrar el producto',
        text: 'El producto no se ha podido registrar',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }
}
