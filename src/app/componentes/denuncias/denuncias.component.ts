import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { BaseService } from '../../servicios/base.service';
import { formulario } from '../../models/formulario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.scss'],
})
export class DenunciasComponent implements OnInit {
  public formulario1: any =
    {
      Fecha: null,
      Reactivo1: null,
      Reactivo2: null,
      Reactivo3: null,
      Reactivo4: null,
      Reactivo5: null,
      Reactivo6: null,
      Reactivo7: null,
      Reactivo8: null,
    };
  public formulario2: any =
    {
      Reactivo101: null,
      Reactivo102: null,
      Reactivo103: null,
      Reactivo104: null,
      Reactivo105: null,
      Reactivo106: null,
      Reactivo107: null,
      Reactivo108: null,
      Reactivo109: null,
      Reactivo110: null,
      Reactivo111: null
    };




  constructor(private nav: NavParams,
    private modal: ModalController,
    public alertController: AlertController,
    private bd: BaseService,
    private route: Router) { }


  public institucion: any;
  ngOnInit() {
    this.institucion = this.nav.get('institucionObejto');
  }
  // botones de enviar
  RespuestaFormulario1() {
    const formulario:formulario= {
      Fecha : this.formulario1.Fecha,      
      Reactivo1: this.formulario1.Reactivo1,
      Reactivo2: this.formulario1.Reactivo2,
      Reactivo3: this.formulario1.Reactivo3,
      Reactivo4: this.formulario1.Reactivo4,
      Reactivo5: this.formulario1.Reactivo5,
      Reactivo6: this.formulario1.Reactivo6,
      Reactivo7: this.formulario1.Reactivo7,
      Reactivo8: this.formulario1.Reactivo8,
      Reactivo101: this.formulario2.Reactivo101,
      Reactivo102: this.formulario2.Reactivo102,
      Reactivo103: this.formulario2.Reactivo103,
      Reactivo104: this.formulario2.Reactivo104,
      Reactivo105: this.formulario2.Reactivo105,
      Reactivo106: this.formulario2.Reactivo106,
      Reactivo107: this.formulario2.Reactivo107,
      Reactivo108: this.formulario2.Reactivo108,
      Reactivo109: this.formulario2.Reactivo109,
      Reactivo110: this.formulario2.Reactivo110,
      Reactivo111: this.formulario2.Reactivo111
    }
    this.bd.EnviarForm(formulario, this.institucion.id);
  }
  
  RepuestaFormulario2() {
    const formulario:formulario= {
      Fecha : this.formulario1.Fecha, 
      Reactivo1: this.formulario1.Reactivo1,
      Reactivo2: this.formulario1.Reactivo2,
      Reactivo3: this.formulario1.Reactivo3,
      Reactivo4: this.formulario1.Reactivo4,
      Reactivo5: this.formulario1.Reactivo5,
      Reactivo6: this.formulario1.Reactivo6,
      Reactivo7: this.formulario1.Reactivo7,
      Reactivo8: this.formulario1.Reactivo8,
      Reactivo101: this.formulario2.Reactivo101,
      Reactivo102: this.formulario2.Reactivo102,
      Reactivo103: this.formulario2.Reactivo103,
      Reactivo104: this.formulario2.Reactivo104,
      Reactivo105: this.formulario2.Reactivo105,
      Reactivo106: this.formulario2.Reactivo106,
      Reactivo107: this.formulario2.Reactivo107,
      Reactivo108: this.formulario2.Reactivo108,
      Reactivo109: this.formulario2.Reactivo109,
      Reactivo110: this.formulario2.Reactivo110,
      Reactivo111: this.formulario2.Reactivo111
    }
    this.bd.EnviarForm(formulario, this.institucion.id);
  }
  //Funciones de alerta de confirmacion
  ValoresVaciosForm1: number = 0;
  alerta() {
    if (this.formulario1.Fecha == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo1 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo2 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo3 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo4 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo5 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo6 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo7 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo8 == null) {
      this.ValoresVaciosForm1 += 1;
    }

    console.log(this.ValoresVaciosForm1);
    if(this.ValoresVaciosForm1==0){
      this.presentAlertConfirm();
    }
    else{
      this.presentAlert(this.ValoresVaciosForm1);
    }
    this.ValoresVaciosForm1 = 0;
  }

  async presentAlert(numero) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'Faltan '+numero+' preguntas por rellenar',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Denuncia ciudadana',
      message: '',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.RespuestaFormulario1();
          }
        }
      ]
    });

    await alert.present();
  }
  //                Formulario 2 confrimacion
  ValoresVaciosForm2: number = 0;
  alerta2() {
    if (this.formulario1.Fecha == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo1 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo2 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo3 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo4 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo5 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo6 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo7 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario1.Reactivo8 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.formulario2.Reactivo101 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo102 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo103 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo104 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo105 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo106 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo107 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo108 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo109 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo110 == null) {
      this.ValoresVaciosForm2 += 1;
    }
    if (this.formulario2.Reactivo111 == null) {
      this.ValoresVaciosForm2 += 1;
    }

    console.log(this.ValoresVaciosForm2);
    if(this.ValoresVaciosForm2==0 && this.ValoresVaciosForm2==0){
      this.presentAlertConfirm2();
    }
    else{
      this.presentAlert2(this.ValoresVaciosForm2, this.ValoresVaciosForm1);
    }
    this.ValoresVaciosForm2 = 0;
  }

  async presentAlert2(numero, numero1) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'Faltan '+numero+' preguntas por rellenar',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Denuncia ciudadana',
      message: '',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.RepuestaFormulario2();
          }
        }
      ]
    });

    await alert.present();
  }

  // Mostrar y ocultar las preguntas extras
  masPreguntas = false;
  segmentChanged(e) {
    console.log(e.detail.value,);
    if (e.detail.value == 10) {
      this.masPreguntas = true;
    }
    if (e.detail.value == 5 || e.detail.value == 0) {
      this.masPreguntas = false;
    }
  }
  //cerrar modal
  closeForm() {
    this.modal.dismiss();
  }

}
