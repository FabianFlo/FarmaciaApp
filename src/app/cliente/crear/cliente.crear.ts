import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';  // Asegúrate de ajustar la ruta si es necesario
import { AlertController, NavController } from '@ionic/angular';
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

  constructor(private authService: AuthService,
              public navCtrl: NavController,
              public alertController: AlertController
    ) { }

  ngOnInit(): void {
    // Código que quieres que se ejecute al inicializar la página
    // Si no hay necesidad de ejecutar algo específico al iniciar, puedes dejarlo vacío
  }

  async register() {
    const result = await this.authService.signUp(this.email, this.password);
    if (result !== true) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Falta llenar campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      this.errorMessage = result;

    } else {
      const alert = await this.alertController.create({
        header: 'Bienvenidos',
        message: 'disfrute la App',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
}
}
