import { Injectable, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
    return this.db.collection('oaxacaintegro').snapshotChanges().pipe(map(room => {
      return room.map(a =>{
        const data =a.payload.doc.data() as InterfaceInstitucion;
        data.id = a.payload.doc.id;
        return data
      })
    }));
  }
}
