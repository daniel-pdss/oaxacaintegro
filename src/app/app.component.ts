import { Component, OnInit } from '@angular/core';
import { BaseService, InterfaceInstitucion } from './servicios/base.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ListasService } from './servicios/listas.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private baseService: BaseService,
    private router:Router,
    private listaService :ListasService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
    this.baseService.getInstituciones().subscribe(institucion => {
      this.institucionArray = institucion;
      for (let item of this.institucionArray) {
        if (item.id !== 'AutoEvaluaciones' && item.id !== 'DenunciaExprex') {
          this.baseService.getDemandas(item.id).subscribe(demandas => {
            for (let iterator of demandas) {
              this.Valores(iterator.id, item.institucion, item.tipo);
            }
          });

        }

      }
    })
  }


  institucionArray: any = [];

  a = {}
  demanda: any = [];
  Valores(id, nombre, tipo) {
    this.a = {
      id: id,
      nombre: nombre,
      tipo: tipo
    }
    this.demanda.push(this.a);
    // console.log(this.demanda);
  }
  onClick() {
    //console.log(this.demanda)
  this.listaService.setObjetos(this.demanda);
   this.router.navigate(['/pruebas']);

  }

}
