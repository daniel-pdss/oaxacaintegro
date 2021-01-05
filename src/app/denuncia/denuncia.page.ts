import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DenunciaExprexForm } from '../models/formulario';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseService } from '../servicios/base.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})

export class DenunciaPage implements OnInit {

  constructor(public alertController: AlertController,
    private db: BaseService,
    public camara: Camera,
    private route: Router) { }
    img: any;
  public DenunciaExprex: any =
    {
      Hora: null,
      Fecha: null,
      sexo: null,
      tipo: null,
      edad: null,
      categoria: null,
      institucion: null,
      descripcion: null,
      foto: null
    };
  ngOnInit() {
  }
      RespuestaDenuncia() {
      const DenunciaForm :DenunciaExprexForm= {
        Hora: this.DenunciaExprex.Hora,
        Fecha: this.DenunciaExprex.Fecha,
        sexo: this.DenunciaExprex.sexo,
        tipo: this.DenunciaExprex.tipo,
        edad: this.DenunciaExprex.edad,
        categoria: this.DenunciaExprex.categoria,
        institucion: this.DenunciaExprex.institucion,
        descripcion: this.DenunciaExprex.descripcion,
        foto: this.DenunciaExprex.foto
      }
      this.db.EnviarDenunciaExprex(DenunciaForm);
      this.route.navigate(['/contacts']);
    }
  ValoresVaciosForm: number = 0;
  alerta() {
    console.log(this.DenunciaExprex);
    if (this.DenunciaExprex.Hora == null) {
      this.ValoresVaciosForm += 1;
    }
    if (this.DenunciaExprex.Fecha == null) {
      this.ValoresVaciosForm += 1;
    }
    if (this.DenunciaExprex.sexo == null) {
      this.ValoresVaciosForm += 1;
    }
    if (this.DenunciaExprex.tipo == null) {
      this.ValoresVaciosForm += 1;
    }
    if (this.DenunciaExprex.edad == null) {
      this.ValoresVaciosForm += 1;
    }
    if (this.DenunciaExprex.categoria == null) {
      this.ValoresVaciosForm += 1;
    }
    if (this.DenunciaExprex.institucion == null) {
      this.ValoresVaciosForm += 1;
    }
    if (this.DenunciaExprex.descripcion == null) {
      this.ValoresVaciosForm += 1;
    }
    if (this.DenunciaExprex.foto == null) {
      this.ValoresVaciosForm += 1;
    }

    console.log(this.DenunciaExprex);
    if(this.ValoresVaciosForm==0){
      this.presentAlertConfirm();
    }
    else{
      this.presentAlert(this.ValoresVaciosForm);
    }
    this.ValoresVaciosForm = 0;
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
            this.RespuestaDenuncia();
          }
        }
      ]
    });

    await alert.present();
  }
// tomar foto
tomarFoto(){
  this.camara.getPicture({
    destinationType: this.camara.DestinationType.DATA_URL,
    sourceType: this.camara.PictureSourceType.CAMERA,
    mediaType: this.camara.MediaType.PICTURE,
    allowEdit: false,
    encodingType: this.camara.EncodingType.JPEG,
    targetHeight: 1024,
    targetWidth: 1024,
    correctOrientation: true,
    saveToPhotoAlbum: true
  }).then(resultado => {
    this.img="data:image/jpeg;base64,"+ resultado;
  }).catch( error => {
    console.log(error);
  })
}
Galeria(){
  this.camara.getPicture({
    destinationType: this.camara.DestinationType.DATA_URL,
    sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
    mediaType: this.camara.MediaType.PICTURE,
    allowEdit: false,
    encodingType: this.camara.EncodingType.JPEG,
    targetHeight: 1024,
    targetWidth: 1024,
    correctOrientation: true,
    saveToPhotoAlbum: true
  }).then(resultado => {
    this.img="data:image/jpeg;base64,"+ resultado;
  }).catch( error => {
    console.log(error);
  })
}
}

