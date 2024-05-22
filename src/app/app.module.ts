import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { CancionesComponent } from './components/canciones/canciones.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CuentosComponent } from './components/cuentos/cuentos.component';
import { FabulasComponent } from './components/fabulas/fabulas.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    CancionesComponent,
    CuentosComponent,
    FabulasComponent,
    JuegosComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
