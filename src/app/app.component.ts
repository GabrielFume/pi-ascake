import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piñas Cake';
  a = 4;
  b = 5;
  listo = false;

  contructor(){
  	setTimeout(() => {
  		this.listo = true;
  	}, 3000)
  }
}
