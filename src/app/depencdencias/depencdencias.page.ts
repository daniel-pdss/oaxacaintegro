import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BaseService, InterfaceInstitucion } from '../servicios/base.service';
import { DenunciasComponent } from '../componentes/denuncias/denuncias.component';

@Component({
  selector: 'app-depencdencias',
  templateUrl: './depencdencias.page.html',
  styleUrls: ['./depencdencias.page.scss'],
})

export class DepencdenciasPage implements OnInit {
   institucionArray:any= [];
   secretarias:any =[];
   organos:any=[];
   entidades:any =[];

  constructor(private router: Router,
    private baseService: BaseService,
    private modal: ModalController) {}

  ngOnInit() {
    this.baseService.getInstituciones().subscribe( institucion => {
      this.institucionArray = institucion;
      this.array(this.institucionArray);
    });
  }

  array(array){
    
    for (let file of array) {  
          
      if(file.tipo == "secretaria"){
        this.secretarias.push(file);
      }
      if (file.tipo =="organo"){
        this.organos.push(file);
      }
      if(file.tipo =="entidad"){
        this.entidades.push(file);
        
      }
  }
  }
  navigateToFormulario(modal){
    this.modal.create({
      component: DenunciasComponent,
      componentProps:{
        institucionObejto:modal
      }
    }).then((modal)=> modal.present())
    
  }
}
