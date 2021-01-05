import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage implements OnInit {
  fruits = ["apple", "banana", "cherry"];
  eating = "";
  lista: Array<any> = [
    {
      id:1,
      titular:"Lic. Mariana Erandi Nassar Piñeyro",
      nombre:"SEMOVI",
      contacto:"telefono/correo electronico",
      logo:'assets/img/ico-Dependencias/semovi.jpg'
    },
    {
      id:2,
      titular:"Lic. Mariana Erandi Nassar Piñeyro",
      nombre:"SEBIEN",
      contacto:"telefono/correo electronico",
      logo:"assets/img/ico-Dependencias/Bienestar Oaxaca.jpeg"
    
    },
    {
      id:3,
      titular:"Lic. Mariana Erandi Nassar Piñeyro",
      nombre:"Secretaria de Economia",
      contacto:"telefono/correo electronico",
      logo:"assets/img/ico-Dependencias/secretaria economia.jpg"
    
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
export class HomePage {
  fruits = ["apple", "banana", "cherry"];
  eating = "";
}
