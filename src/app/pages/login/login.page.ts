import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      id:0,
      nombre:"Matias"
    }
  ]

  //

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){
    //Creacion loga de programacion
    this.router.navigate(['/agregar']);
  }
}
