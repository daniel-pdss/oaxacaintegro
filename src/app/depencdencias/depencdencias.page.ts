import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService, InterfaceInstitucion } from '../servicios/base.service';

@Component({
  selector: 'app-depencdencias',
  templateUrl: './depencdencias.page.html',
  styleUrls: ['./depencdencias.page.scss'],
})
export class DepencdenciasPage implements OnInit {

  public institucionArray:any [];
  public secretarias:any [];
  public organos:any [];
  public entidades:any [];
  constructor(private router: Router,
    private baseService: BaseService) {}

  ngOnInit() {    
    this.baseService.getInstituciones().subscribe ( institucion => {
      this.institucionArray = institucion;
      /*for (let prop in this.institucionArray) {
        if(prop.tipo =='secretaria'){

        }
        if(prop.tipo =='secretaria'){

        }
        if(prop.tipo =='secretaria'){
          
        }
    }*/
    });
  }


  navigateToFormulario(){
    this.router.navigate(['/formulario']);
  }
}
