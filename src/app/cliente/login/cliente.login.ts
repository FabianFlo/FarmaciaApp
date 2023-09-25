import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cliente.login.cliente',
  templateUrl: './cliente.login.cliente.html',
})
export class ClienteLogin implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioLogin = this.fb.group({
      'email': ["", Validators.required],
      'password': ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  async ingresar() {
    const f = this.formularioLogin.value;
    const usuariosJSON = localStorage.getItem('usuarios');
    
    if (usuariosJSON) {
      const usuarios = JSON.parse(usuariosJSON);

      const usuarioAutenticado = usuarios.find((usuario: any) => usuario.email === f.email && usuario.password === f.password);

      if (usuarioAutenticado) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        
        const alert = await this.alertController.create({
          header: 'Bienvenido',
          message: usuarioAutenticado.email,
          buttons: ['Aceptar'],
        });

        await alert.present();
        this.navCtrl.navigateRoot('Inicio');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'El correo o la contraseña son incorrectos',
          buttons: ['Aceptar'],
        });

        await alert.present();
      }
    } else {
      // Manejo de caso cuando no se encuentra la lista de usuarios en localStorage
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No hay usuarios registrados',
        buttons: ['Aceptar'],
      });

      await alert.present();
    }
  }
}
