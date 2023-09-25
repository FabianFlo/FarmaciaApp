import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cliente.crear.cliente',
  templateUrl: './cliente.crear.cliente.html',
})
export class ClienteCrear implements OnInit {

  formularioRegistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioRegistro = this.fb.group({
      'nombre': ["", Validators.required],
      'password': ["", Validators.required],
      'email': ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  async guardar() {
    const f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Falta llenar campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    // Obtener la lista de usuarios desde localStorage
    const usuariosJSON = localStorage.getItem('usuarios');
    const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];

    // Verificar las credenciales del usuario
    const usuarioExistente = usuarios.find((usuario: any) => usuario.nombre === f.nombre);

    if (usuarioExistente) {
      // El nombre de usuario ya existe, muestra una alerta
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El nombre de usuario ya existe',
        buttons: ['Aceptar']
      });
      await alert.present();
    } else {
      // El nombre de usuario es único, agrega el nuevo usuario a la lista
      const nuevoUsuario = {
        nombre: f.nombre,
        password: f.password,
        email: f.email
      };
      usuarios.push(nuevoUsuario);

      // Almacena la lista actualizada de usuarios en localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      // Aquí puedes realizar acciones adicionales, como redirigir al usuario a su perfil
    }
  }
}