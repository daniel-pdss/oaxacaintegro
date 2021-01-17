import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListasService {
  private objSourse= new BehaviorSubject<{}>({});
  $getObjectSource = this.objSourse.asObservable();

  constructor() { }

  setObjetos( data: any){
    this.objSourse.next(data);
  }
}
