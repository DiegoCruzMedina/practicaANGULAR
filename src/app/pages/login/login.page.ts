import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //VARIABLES PRIMITIBAS
  comuna:string="Quilicura";
  edad:number=20;
  nombreUsuario:string="";

  //"ARRAY" VARIABLES COMPUESTAS
  arreglo:any={
    nombre:'Jhonny',
    apellido:'Silva',
    edad:30
  }

  //CREAR UNA COLECCION DE DISTINTOS DATOS
  lista: any = [
    {
      id:1,
      nombre:"Maria",
    },
    {
      id:2,
      nombre:"Matias"
    },
    {
      id:3,
      nombre:"Jael"
    },
    {
      id:4,
      nombre:"Nashe"
    }
  ]

  //

  constructor(private router:Router, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }
  
  irPagina(){
    //CREACION DE VARIABLE CONTEXTO
    let context: NavigationExtras = {
      state:{
        com: this.comuna,
        ed: this.edad,
        user: this.nombreUsuario
      }
    }
    
    //ALERTA TOAST MOMENTANEO
    this.presentToast('bottom');
    //ALERTA CON PARAMETROS
    this.presentAlert('Titulo alerta','Mensjae de la alerta');
    //MANDAR DATA HACIA LA PAGINA DE VARIABLES DE LOGIN
    this.router.navigate(['/agregar'],context);
  }

  async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: 'Soy una alerta',
      message: 'Bienvenido al programa.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Wena compare shoroManolo!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
