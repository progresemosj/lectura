import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { HomeComponent } from './components/home/home.component';
import { Fabula1Component } from './components/fabula1/fabula1.component';
import { Fabula2Component } from './components/fabula2/fabula2.component';
import { Fabula3Component } from './components/fabula3/fabula3.component';
import { Fabula4Component } from './components/fabula4/fabula4.component';
import { Fabula5Component } from './components/fabula5/fabula5.component';
import { Fabula6Component } from './components/fabula6/fabula6.component';
import { Fabula7Component } from './components/fabula7/fabula7.component';
import { Fabula8Component } from './components/fabula8/fabula8.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { CancionesComponent } from './components/canciones/canciones.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CuentosComponent } from './components/cuentos/cuentos.component';
import { FabulasComponent } from './components/fabulas/fabulas.component';

import { JuegosComponent } from './components/juegos/juegos.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { Juego1Component } from './components/juego1/juego1.component';
import { Juegom2Component } from './components/juegom2/juegom2.component';
import { Juegom3Component } from './components/juegom3/juegom3.component';
import { Juegom4Component } from './components/juegom4/juegom4.component';
import { Juegom41Component } from './components/juegom41/juegom41.component';
import { Menu1Component } from './components/menu1/menu1.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { Menu3Component } from './components/menu3/menu3.component';
import { Menu4Component } from './components/menu4/menu4.component';
import { Menu5Component } from './components/menu5/menu5.component';
import { Menu6Component } from './components/menu6/menu6.component';
import { Menu7Component } from './components/menu7/menu7.component';
import { Juegol5Component } from './components/juegol5/juegol5.component';
import { Juegol6Component } from './components/juegol6/juegol6.component';
import { Juegol7Component } from './components/juegol7/juegol7.component';
import { Juegol8Component } from './components/juegol8/juegol8.component';
import { Juegol81Component } from './components/juegol81/juegol81.component';
import { Juegoc9Component } from './components/juegoc9/juegoc9.component';
import { Juegoc10Component } from './components/juegoc10/juegoc10.component';
import { Juegoc11Component } from './components/juegoc11/juegoc11.component';
import { Juegoc12Component } from './components/juegoc12/juegoc12.component';
import { Juegoc121Component } from './components/juegoc121/juegoc121.component';
import { Juegoa13Component } from './components/juegoa13/juegoa13.component';
import { Juegoa14Component } from './components/juegoa14/juegoa14.component';
import { Juegoa15Component } from './components/juegoa15/juegoa15.component';
import { Juegoa16Component } from './components/juegoa16/juegoa16.component';
import { Juegor17Component } from './components/juegor17/juegor17.component';
import { Juegor18Component } from './components/juegor18/juegor18.component';
import { Juegor19Component } from './components/juegor19/juegor19.component';
import { Juegor20Component } from './components/juegor20/juegor20.component';
import { Juegoco21Component } from './components/juegoco21/juegoco21.component';
import { Juegoco22Component } from './components/juegoco22/juegoco22.component';
import { Juegoco23Component } from './components/juegoco23/juegoco23.component';
import { Juegoco24Component } from './components/juegoco24/juegoco24.component';
import { Juegomu25Component } from './components/juegomu25/juegomu25.component';
import { Juegomu26Component } from './components/juegomu26/juegomu26.component';
import { Juegomu27Component } from './components/juegomu27/juegomu27.component';
import { Juegomu28Component } from './components/juegomu28/juegomu28.component';
import { PrincipalComponent } from './components/canciones/principal/principal.component';
import { VacaLolaComponent } from './components/canciones/vaca-lola/vaca-lola.component';
import { PatitoJuanComponent } from './components/canciones/patito-juan/patito-juan.component';
import { LosPollitosComponent } from './components/canciones/los-pollitos/los-pollitos.component';
import { LobitosComponent } from './components/canciones/lobitos/lobitos.component';
import { BarquitoComponent } from './components/canciones/barquito/barquito.component';
import { ArrozComponent } from './components/canciones/arroz/arroz.component';
import { AranitaComponent } from './components/canciones/aranita/aranita.component';
import { BurritoComponent } from './components/canciones/burrito/burrito.component';
import { PrimerCuentoComponent } from './components/cuentos/cuento-info-component/primer-cuento.component';
import { Juegomu281Component } from './components/juegomu281/juegomu281.component';
import { Juegoa161Component } from './components/juegoa161/juegoa161.component';
import { Juegoco241Component } from './components/juegoco241/juegoco241.component';
import { Juegor201Component } from './components/juegor201/juegor201.component';
import { Fabula11Component } from './components/fabula11/fabula11.component';
import { Fabula9Component } from './components/fabula9/fabula9.component';
import { Fabula10Component } from './components/fabula10/fabula10.component';
import { Fabula12Component } from './components/fabula12/fabula12.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    CancionesComponent,
    CuentosComponent,
    FabulasComponent,
    Fabula1Component,
    Fabula2Component,
    Fabula3Component,
    Fabula4Component,
    Fabula5Component,
    Fabula6Component,
    Fabula7Component,
    Fabula8Component,
    Fabula9Component,
    Fabula10Component,
    Fabula11Component,
    Fabula12Component,

    JuegosComponent,
    CarouselComponent,

    PrincipalComponent,
    VacaLolaComponent,
    PatitoJuanComponent,
    LosPollitosComponent,
    LobitosComponent,
    BarquitoComponent,
    ArrozComponent,
    AranitaComponent,
    BurritoComponent,

    CuentosComponent,
    // PrimerCuentoComponent,

    Juego1Component,
    Juegom2Component,
    Juegom3Component,
    Juegom4Component,
    Juegom41Component,
    Juegol5Component,
    Juegol6Component,
    Juegol7Component,
    Juegol8Component,
    Juegol81Component,
    Juegoc9Component,
    Juegoc10Component,
    Juegoc11Component,
    Juegoc12Component,
    Juegoc121Component,
    Juegoa13Component,
    Juegoa14Component,
    Juegoa15Component,
    Juegoa16Component,
    Juegoa161Component,
    Juegor17Component,
    Juegor18Component,
    Juegor19Component,
    Juegor20Component,
    Juegor201Component,
    Juegoco21Component,
    Juegoco22Component,
    Juegoco23Component,
    Juegoco24Component,
    Juegoco241Component,
    Juegomu25Component,
    Juegomu26Component,
    Juegomu27Component,
    Juegomu28Component,
    Juegomu281Component,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    Menu5Component,
    Menu6Component,
    Menu7Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
