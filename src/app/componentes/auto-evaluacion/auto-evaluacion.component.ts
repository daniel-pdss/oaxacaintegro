import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { autoEvaluacionForm } from '../../models/formulario';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseService } from '../../servicios/base.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auto-evaluacion',
  templateUrl: './auto-evaluacion.component.html',
  styleUrls: ['./auto-evaluacion.component.scss'],
})
export class AutoEvaluacionComponent implements OnInit {

  constructor(private modal: ModalController,
    public alertController: AlertController,
    private nav: NavParams,
    private db: BaseService,
    private route: Router) { }


    
  public autoevaluacion: any =
    {
      nombre: null,
      Reacti1: null,
      Reacti2: null,
      Reacti3: null,
      Reacti4: null,
      Reacti5: null,
      Reacti6: null,
      Reacti7: null,
      Reacti8: null,
      Reacti9: null,
      Reacti10: null,
      Reacti11: null
    };
  ngOnInit() {}
    // enviar
    Respuestaautoevaluacion() {
      const EvaluacionForm :autoEvaluacionForm= {
        nombre: this.autoevaluacion.nombre,
        Reactivo1: this.autoevaluacion.Reacti1,
        Reactivo2: this.autoevaluacion.Reacti2,
        Reactivo3: this.autoevaluacion.Reacti3,
        Reactivo4: this.autoevaluacion.Reacti4,
        Reactivo5: this.autoevaluacion.Reacti5,
        Reactivo6: this.autoevaluacion.Reacti6,
        Reactivo7: this.autoevaluacion.Reacti7,
        Reactivo8: this.autoevaluacion.Reacti8,
        Reactivo9: this.autoevaluacion.Reacti9,
        Reactivo10: this.autoevaluacion.Reacti10,
        Reactivo11: this.autoevaluacion.Reacti11
      }
      this.db.EnviarAutoEvaluacion(EvaluacionForm);
    }
    ValoresVaciosForm1: number = 0;
  alerta() {
    console.log(this.autoevaluacion);
    if (this.autoevaluacion.nombre == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti1 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti2 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti3 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti4 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti5 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti6 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti7 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti8 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti9 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti10 == null) {
      this.ValoresVaciosForm1 += 1;
    }
    if (this.autoevaluacion.Reacti11 == null) {
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
      header: 'Auto evaluación ciudadana',
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
            this.Respuestaautoevaluacion();
          }
        }
      ]
    });

    await alert.present();
  }
  //cerrar modal
  closeForm() {
    this.modal.dismiss();
  }
}
