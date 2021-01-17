import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseService, InterfaceInstitucion } from '../servicios/base.service';
import { DenunciasComponent } from '../componentes/denuncias/denuncias.component';
import { ActivatedRoute } from '@angular/router';
import { ListasService } from '../servicios/listas.service';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage implements OnInit {

  constructor(
    private baseService: BaseService,
    private routerData: ActivatedRoute,
    private listaService: ListasService
  ) {}
  boolena = false;
  secretarias: any = [];
  organos: any = [];
  entidades: any = [];
  institucionArray: any = [];

  a = {}
  ngOnInit() {
    this.listaService.$getObjectSource.subscribe(
      data => 
      {this.institucionArray=data
        this.RellenarAreglos();
        this.SumarValores();
        this.ValoresFinal();
        this.CrearBarra();
      
      }
      
    )

  }

  SEBIEN = [{
    nombre: null,
    tipo: null,
    total: null
  }];
  SE = [{
    nombre: null,
    tipo: null,
    total: null
  }];
  SEMOVIL = [{
    nombre: null,
    tipo: null,
    total: null
  }];
  IFREO = [{
    nombre: null,
    tipo: null,
    total: null
  }]
  SAPAO = [{
    nombre: null,
    tipo: null,
    total: null
  }]
  CIVIL = [{
    nombre: null,
    tipo: null,
    total: null
  }]
  IAIP = [{
    nombre: null,
    tipo: null,
    total: null
  }]
  ValoresFinal() {
    for (const iterator of this.SumaSecretarias) {
      if (iterator.nombre == 'Secretaría de Bienestar del Estado de Oaxaca') {
        this.SEBIEN = [iterator]
      }
      if (iterator.nombre == 'Secretaría de Economía') {
        this.SE = [iterator]
      }
      if (iterator.nombre == 'Secretaría de Movilidad') {
        this.SEMOVIL = [iterator]
      }
    }
    for (const iterator of this.SumaEntidad) {
      if (iterator.nombre == 'Instituto de la Función Registral del Estado de Oaxaca') {
        this.IFREO = [iterator]
      }
      if (iterator.nombre == 'Dirección del Registro Civil') {
        this.CIVIL = [iterator]
      }
      if (iterator.nombre == 'Servicios de Agua Potable y Alcantarillado de Oaxaca') {
        this.SAPAO = [iterator]
      }
    }
    for (const iterator of this.SumaOrgano) {
      this.IAIP = [iterator]
    }
  }
  sumas = 0
  CrearBarra() {
    console.log(this.SEBIEN[0].total)

    this.SEBIEN[0].total = (this.SEBIEN[0].total * 100 / this.institucionArray.length) 
    this.SE[0].total = (this.SE[0].total * 100 / this.institucionArray.length) 
    this.SEMOVIL[0].total = (this.SEMOVIL[0].total * 100 / this.institucionArray.length) 
    this.IFREO[0].total = (this.IFREO[0].total * 100 / this.institucionArray.length) 
    this.CIVIL[0].total = (this.CIVIL[0].total * 100 / this.institucionArray.length) 
    this.SAPAO[0].total = (this.SAPAO[0].total * 100 / this.institucionArray.length) 
    this.IAIP[0].total = (this.IAIP[0].total * 100 / this.institucionArray.length) 
  }


  RellenarAreglos() {
    for (let file of this.institucionArray) {
      if (file.tipo == "secretaria") {
        this.secretarias.push(file);
      }
      if (file.tipo == "organo") {
        this.organos.push(file);
      }
      if (file.tipo == "entidad") {
        this.entidades.push(file);
      }
    }
  }

  SumaSecretarias = [];
  SumaOrgano = [];
  SumaEntidad = [];
  interface = {};
  suma = 0;
  SumarValores() {

    var suma1 = 1
    var suma2 = 1
    var suma3 = 1

    for (const iterator of this.secretarias) {
      if (iterator.nombre == 'Secretaría de Bienestar del Estado de Oaxaca') {
        this.interface = {
          nombre: iterator.nombre,
          tipo: iterator.tipo,
          total: suma1
        }
        this.SumaSecretarias.push(this.interface);
        suma1 += 1;
      }
      if (iterator.nombre == 'Secretaría de Economía') {
        this.interface = {
          nombre: iterator.nombre,
          tipo: iterator.tipo,
          total: suma2
        }
        this.SumaSecretarias.push(this.interface);
        suma2 += 1;
      }
      if (iterator.nombre == 'Secretaría de Movilidad') {
        this.interface = {
          nombre: iterator.nombre,
          tipo: iterator.tipo,
          total: suma3
        }
        this.SumaSecretarias.push(this.interface);
        suma3 += 1;
      }

    }
    suma1 = 1
    suma2 = 1
    suma3 = 1

    for (const iterator of this.organos) {
      this.interface = {
        nombre: iterator.nombre,
        tipo: iterator.tipo,
        total: suma1
      }
      this.SumaOrgano.push(this.interface);
      suma1 += 1;
    }
    suma1 = 1
    for (const iterator of this.entidades) {
      if (iterator.nombre == 'Instituto de la Función Registral del Estado de Oaxaca') {
        this.interface = {
          nombre: iterator.nombre,
          tipo: iterator.tipo,
          total: suma1
        }
        this.SumaEntidad.push(this.interface);
        suma1 += 1;
      }
      if (iterator.nombre == 'Dirección del Registro Civil') {
        this.interface = {
          nombre: iterator.nombre,
          tipo: iterator.tipo,
          total: suma2
        }
        this.SumaEntidad.push(this.interface);
        suma2 += 1;
      }
      if (iterator.nombre == 'Servicios de Agua Potable y Alcantarillado de Oaxaca') {
        this.interface = {
          nombre: iterator.nombre,
          tipo: iterator.tipo,
          total: suma3
        }
        this.SumaEntidad.push(this.interface);
        suma3 += 1;
      }
    }

  }
}
