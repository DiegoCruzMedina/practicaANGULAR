import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  Comuna: string="";
  Edad!: number;  //NO INICIALIZA LA VARIABLE CON ALGUN DATO
  edad: number=0;
  Usuario: string="";



  constructor(private router: Router, private activedroute: ActivatedRoute) {
    //realizar la captura de informacion que viene por mi "CONTEXT"
    this,activedroute.queryParams.subscribe(param =>{
      //VALIDAMOS SI VIENE O NO LA INFORMACION
      if(this.router.getCurrentNavigation()?.extras.state){
        //capturamos la informacion
        this.Usuario = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        this.Comuna = this.router.getCurrentNavigation()?.extras?.state?.['com'];
        this.edad = this.router.getCurrentNavigation()?.extras?.state?.['ed'];
        
      }
    });
   }

  ngOnInit() {
  }

}
