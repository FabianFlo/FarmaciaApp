import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';  // Asegúrate de ajustar la ruta si es necesario
// @ts-ignore
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
  // ...
}



@Component({
  selector: 'app-cliente.crear.cliente',
  templateUrl: './cliente.crear.cliente.html',
})
export class ClienteCrear implements OnInit {

  // Variables para enlazar con el formulario
  email: string = '';
  password: string = '';

  // Mensaje de error
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Código que quieres que se ejecute al inicializar la página
    // Si no hay necesidad de ejecutar algo específico al iniciar, puedes dejarlo vacío
  }

  async register() {
    const result = await this.authService.signUp(this.email, this.password);
    if (result !== true) {
        this.errorMessage = result;
    } else {
    }
}
}
