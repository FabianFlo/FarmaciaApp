import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-cliente.login.cliente',
  templateUrl: './cliente.login.cliente.html',
})
export class ClienteLogin implements OnInit {

    formularioLogin: FormGroup;

    constructor(public fb: FormBuilder,
                public alertController: AlertController,
                public NavCtrl: NavController ) { 
        
        this.formularioLogin = this.fb.group({
            'nombre': new FormControl(""),
            'password': new FormControl("",Validators.required),
            'email': new FormControl("",Validators.required)
        })
    }

    ngOnInit() {
    }

    async ingresar() {
        var f = this.formularioLogin.value;
        var usuarioString = localStorage.getItem('usuario');
        if (usuarioString !== null) {
          var usuario = JSON.parse(usuarioString);
          if (usuario.email == f.email && usuario.password == f.password) {
            console.log('Ingresado');
            localStorage.setItem('ingresado', 'true');
            const alert = await this.alertController.create({
                header: 'Bienvenido',
                message: usuario.email,
                buttons: ['Aceptar'],
              });
              await alert.present();
              this.NavCtrl.navigateRoot('Inicio');
              
          } else {
            const alert = await this.alertController.create({
              header: 'Datos incorrectos',
              message: 'Tienes que llenar todos los datos',
              buttons: ['Aceptar'],
            });
            await alert.present();
          }
        } else {
          // Manejo de caso cuando no se encuentra el valor en localStorage
        }
      }  
}
