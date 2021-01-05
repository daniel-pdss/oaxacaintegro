import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-autoevaluacion',
  templateUrl: './autoevaluacion.page.html',
  styleUrls: ['./autoevaluacion.page.scss'],
})
// Pass a custom class to each select interface for styling

export class AutoevaluacionPage implements OnInit {

  constructor() { 
    
  }
  foodList = ['apple','orange','pear'];
  users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

   compareWith = this.compareWithFn;
   
  ngOnInit() {
  }
  

}

export class SelectExample {
  foodList = ['apple','orange','pear'];
  users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

   compareWith = this.compareWithFn;
}
