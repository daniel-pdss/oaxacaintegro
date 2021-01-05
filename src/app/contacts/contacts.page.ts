import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AutoEvaluacionComponent } from '../componentes/auto-evaluacion/auto-evaluacion.component';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})

export class ContactsPage {

  constructor(private router: Router,
    private modal: ModalController) {}

  navigateToDepencdencias(){
    this.router.navigate(['/depencdencias']);
  }

  navigateToDenuncia(){
    this.router.navigate(['/denuncia']);
  }

  navigateToAutoevaluacion(){
    this.modal.create({
      component: AutoEvaluacionComponent,
      componentProps:{
        
      }
    }).then((modal)=> modal.present())
  }

}
