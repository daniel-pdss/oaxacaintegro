import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { formulario, autoEvaluacionForm, DenunciaExprexForm } from '../models/formulario';
import * as firebase from 'firebase/firebase';

export interface InterfaceInstitucion{
  institucion: string
  imagen: string
  contacto: string
  tipo: string
  id: string
}
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private db: AngularFirestore) { }

  getInstituciones(){
   return this.db.collection('oaxacaintegro').snapshotChanges().pipe(map(rooms => {
     return rooms.map(a =>{
       const data = a.payload.doc.data()  as InterfaceInstitucion;
       data.id = a.payload.doc.id;
       return data;
     })
   }))
  }
  getDemandas(id){
    return this.db.collection('oaxacaintegro').doc(id).collection('Denuncias').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() ;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
   }

  EnviarForm(form: formulario,id: string ){    
    this.db.collection('oaxacaintegro').doc(id).collection('Denuncias').add({          
      Denuncia :  (form)
    })
  }
  EnviarAutoEvaluacion(form: autoEvaluacionForm){    
    this.db.collection('oaxacaintegro').doc('AutoEvaluaciones').collection('AutoEvaluacion').add({
      AutoEvaluacion :  (form)
    })
  }
  EnviarDenunciaExprex(form: DenunciaExprexForm){    
    this.db.collection('oaxacaintegro').doc('DenunciaExprex').collection('DenunciaExprex').add({
      DenunciaExprex :  (form)
    })
  }
}
