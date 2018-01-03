import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { Routes, RouterModule} from "@angular/router";
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';

const appRoutes: Routes = [
	{path: '', component: DetalleComponent},
  {path: 'index', component: DetalleComponent},
	{path: 'contacto', component: ContactoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo0HoKBwuxoD58B12L26ctKxCtSvhmr6k'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
