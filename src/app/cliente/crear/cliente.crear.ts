import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-cliente.crear.cliente',
  templateUrl: './cliente.crear.cliente.html',
})
export class ClienteCrear implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, 
              public alertController: AlertController,
              public navCtrl: NavController ) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }   

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert =await this.alertController.create({
        header:'Datos incompletos',
        message:'Falta llenar campos',
        buttons:['Aceptar']
      });
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password,
      email: f.email
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
}
