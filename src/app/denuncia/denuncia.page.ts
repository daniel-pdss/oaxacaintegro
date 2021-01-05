import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})

export class DenunciaPage implements OnInit {

  constructor() { }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ngOnInit() {
  }


}

