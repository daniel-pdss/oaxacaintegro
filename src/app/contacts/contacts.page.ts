import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})

export class ContactsPage {

  constructor(private router: Router) {}

  navigateToDepencdencias(){
    this.router.navigate(['/depencdencias']);
  }

  navigateToDenuncia(){
    this.router.navigate(['/denuncia']);
  }

  navigateToAutoevaluacion(){
    this.router.navigate(['/autoevaluacion']);
  }

}
