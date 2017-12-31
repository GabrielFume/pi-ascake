import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
