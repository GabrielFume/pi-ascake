import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {

title: string = 'Contactanos';
  lat: number = 10.504159;
  lng: number = -66.94077;
  constructor() { 
  }

  ngOnInit() {
  }

}
