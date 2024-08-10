import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { CuentosComponent } from './components/cuentos/cuentos.component';
import { FabulasComponent } from './components/fabulas/fabulas.component';
import { Fabula1Component } from './components/fabula1/fabula1.component';
import { Fabula2Component } from './components/fabula2/fabula2.component';
import { Fabula3Component } from './components/fabula3/fabula3.component';
import { Fabula4Component } from './components/fabula4/fabula4.component';
import { Fabula5Component } from './components/fabula5/fabula5.component';
import { Fabula6Component } from './components/fabula6/fabula6.component';
import { Fabula7Component } from './components/fabula7/fabula7.component';
import { Fabula8Component } from './components/fabula8/fabula8.component';
import { Menu1Component } from './components/menu1/menu1.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { Menu3Component } from './components/menu3/menu3.component';
import { Menu4Component } from './components/menu4/menu4.component';
import { Menu5Component } from './components/menu5/menu5.component';
import { Menu6Component } from './components/menu6/menu6.component';
import { Menu7Component } from './components/menu7/menu7.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { Juego1Component } from './components/juego1/juego1.component';
import { Juegom2Component } from './components/juegom2/juegom2.component';
import { Juegom3Component } from './components/juegom3/juegom3.component';
import { Juegom4Component } from './components/juegom4/juegom4.component';
import { Juegom41Component } from './components/juegom41/juegom41.component';
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
import { Juegoa161Component } from './components/juegoa161/juegoa161.component';
import { Juegor17Component } from './components/juegor17/juegor17.component';
import { Juegor18Component } from './components/juegor18/juegor18.component';
import { Juegor19Component } from './components/juegor19/juegor19.component';
import { Juegor20Component } from './components/juegor20/juegor20.component';
import { Juegor201Component } from './components/juegor201/juegor201.component';
import { Juegoco21Component } from './components/juegoco21/juegoco21.component';
import { Juegoco22Component } from './components/juegoco22/juegoco22.component';
import { Juegoco23Component } from './components/juegoco23/juegoco23.component';
import { Juegoco24Component } from './components/juegoco24/juegoco24.component';
import { Juegoco241Component } from './components/juegoco241/juegoco241.component';
import { Juegomu25Component } from './components/juegomu25/juegomu25.component';
import { Juegomu26Component } from './components/juegomu26/juegomu26.component';
import { Juegomu27Component } from './components/juegomu27/juegomu27.component';
import { Juegomu28Component } from './components/juegomu28/juegomu28.component';
import { Juegomu281Component } from './components/juegomu281/juegomu281.component';
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
import { CuentoDosInfoComponent } from './components/cuentos/cuento-dos-info/cuento-dos-info.component';
import { CuentoTresInfoComponent } from './components/cuentos/cuento-tres-info/cuento-tres-info.component';
import { CuentoSeisInfoComponent } from './components/cuentos/cuento-seis-info/cuento-seis-info.component';
import { CuentoSieteInfoComponent } from './components/cuentos/cuento-siete-info/cuento-siete-info.component';
import { CuentoOchoInfoComponent } from './components/cuentos/cuento-ocho-info/cuento-ocho-info.component';
import { CuentoNueveInfoComponent } from './components/cuentos/cuento-nueve-info/cuento-nueve-info.component';
import { CuentoDiezInfoComponent } from './components/cuentos/cuento-diez-info/cuento-diez-info.component';
import { CuentoOnceInfoComponent } from './components/cuentos/cuento-once-info/cuento-once-info.component';
import { CuentoDoceInfoComponent } from './components/cuentos/cuento-doce-info/cuento-doce-info.component';
import { CuentoTreceInfoComponent } from './components/cuentos/cuento-trece-info/cuento-trece-info.component';
import { CuentoQuinceInfoComponent } from './components/cuentos/cuento-quince-info/cuento-quince-info.component';
import { CuentoDieciseisInfoComponent } from './components/cuentos/cuento-dieciseis-info/cuento-dieciseis-info.component';
import { CuentoDiecisieteInfoComponent } from './components/cuentos/cuento-diecisiete-info/cuento-diecisiete-info.component';
import { CuentoDieciochoInfoComponent } from './components/cuentos/cuento-dieciocho-info/cuento-dieciocho-info.component';
import { CuentoVeinteInfoComponent } from './components/cuentos/cuento-veinte-info/cuento-veinte-info.component';
import { CuentoCuatroInfoComponent } from './components/cuentos/cuento-cuatro-info/cuento-cuatro-info.component';
import { CuentoCincoInfoComponent } from './components/cuentos/cuento-cinco-info/cuento-cinco-info.component';
import { CuentoCatorceInfoComponent } from './components/cuentos/cuento-catorce-info/cuento-catorce-info.component';
import { CuentoDiecinueveInfoComponent } from './components/cuentos/cuento-diecinueve-info/cuento-diecinueve-info.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'canciones/1', component: CancionesComponent },
  {
    path: 'canciones/principal', component: PrincipalComponent, children: [
      { path: '1', component: CancionesComponent, data: { id: 1 } },
      { path: '2', component: VacaLolaComponent, data: { id: 2 } },
      { path: '3', component: PatitoJuanComponent, data: { id: 3 } },
      { path: '4', component: LosPollitosComponent, data: { id: 4 } },
      { path: '5', component: LobitosComponent, data: { id: 5 } },
      { path: '6', component: BarquitoComponent, data: { id: 6 } },
      { path: '7', component: ArrozComponent, data: { id: 7 } },
      { path: '8', component: AranitaComponent, data: { id: 8 } },
      { path: '9', component: BurritoComponent, data: { id: 9 } }
    ]
  },
  { path: 'cuentos', component: CuentosComponent },
  { path: 'cuentos/primerCuento', component: PrimerCuentoComponent },
  { path: 'cuentos/segundoCuento', component: CuentoDosInfoComponent },
  { path: 'cuentos/tercerCuento', component: CuentoTresInfoComponent },
  { path: 'cuentos/cuartoCuento', component: CuentoCuatroInfoComponent },
  { path: 'cuentos/quintoCuento', component: CuentoCincoInfoComponent },
  { path: 'cuentos/sextoCuento', component: CuentoSeisInfoComponent },
  { path: 'cuentos/septimoCuento', component: CuentoSieteInfoComponent },
  { path: 'cuentos/octavoCuento', component: CuentoOchoInfoComponent },
  { path: 'cuentos/novenoCuento', component: CuentoNueveInfoComponent },
  { path: 'cuentos/decimoCuento', component: CuentoDiezInfoComponent },
  { path: 'cuentos/onceavoCuento', component: CuentoOnceInfoComponent },
  { path: 'cuentos/doceavoCuento', component: CuentoDoceInfoComponent },
  { path: 'cuentos/treseavoCuento', component: CuentoTreceInfoComponent },
  { path: 'cuentos/catorceavoCuento', component: CuentoCatorceInfoComponent },
  { path: 'cuentos/quinceavoCuento', component: CuentoQuinceInfoComponent },
  { path: 'cuentos/dieciseisavoCuento', component: CuentoDieciseisInfoComponent },
  { path: 'cuentos/diecisieteavoCuento', component: CuentoDiecisieteInfoComponent },
  { path: 'cuentos/dieciochoavoCuento', component: CuentoDieciochoInfoComponent },
  { path: 'cuentos/diecinueveavoCuento', component: CuentoDiecinueveInfoComponent },
  { path: 'cuentos/veinteavoCuento', component: CuentoVeinteInfoComponent },

  { path: 'fabulas', component: FabulasComponent },
  { path: 'fabula1', component: Fabula1Component },
  { path: 'fabula2', component: Fabula2Component },
  { path: 'fabula3', component: Fabula3Component },
  { path: 'fabula4', component: Fabula4Component },
  { path: 'fabula5', component: Fabula5Component },
  { path: 'fabula6', component: Fabula6Component },
  { path: 'fabula7', component: Fabula7Component },
  { path: 'fabula8', component: Fabula8Component },
  { path: 'juegos', component: JuegosComponent },
  { path: 'juego1', component: Juego1Component },
  { path: 'juegom2', component: Juegom2Component },
  { path: 'juegom3', component: Juegom3Component },
  { path: 'juegom4', component: Juegom4Component },
  { path: 'juegom41', component: Juegom41Component },
  { path: 'juegol5', component: Juegol5Component },
  { path: 'juegol6', component: Juegol6Component },
  { path: 'juegol7', component: Juegol7Component },
  { path: 'juegol8', component: Juegol8Component },
  { path: 'juegol81', component: Juegol81Component },
  { path: 'juegoc9', component: Juegoc9Component },
  { path: 'juegoc10', component: Juegoc10Component },
  { path: 'juegoc11', component: Juegoc11Component },
  { path: 'juegoc12', component: Juegoc12Component },
  { path: 'juegoc121', component: Juegoc121Component },
  { path: 'juegoa13', component: Juegoa13Component },
  { path: 'juegoa14', component: Juegoa14Component },
  { path: 'juegoa15', component: Juegoa15Component },
  { path: 'juegoa16', component: Juegoa16Component },
  { path: 'juegoa161', component: Juegoa161Component },
  { path: 'juegor17', component: Juegor17Component },
  { path: 'juegor18', component: Juegor18Component },
  { path: 'juegor19', component: Juegor19Component },
  { path: 'juegor20', component: Juegor20Component },
  { path: 'juegor201', component: Juegor201Component },
  { path: 'juegoco21', component: Juegoco21Component },
  { path: 'juegoco22', component: Juegoco22Component },
  { path: 'juegoco23', component: Juegoco23Component },
  { path: 'juegoco24', component: Juegoco24Component },
  { path: 'juegoco241', component: Juegoco241Component },
  { path: 'juegomu25', component: Juegomu25Component },
  { path: 'juegomu26', component: Juegomu26Component },
  { path: 'juegomu27', component: Juegomu27Component },
  { path: 'juegomu28', component: Juegomu28Component },
  { path: 'juegomu281', component: Juegomu281Component },

  { path: 'menu1', component: Menu1Component },
  { path: 'menu2', component: Menu2Component },
  { path: 'menu3', component: Menu3Component },
  { path: 'menu4', component: Menu4Component },
  { path: 'menu5', component: Menu5Component },
  { path: 'menu6', component: Menu6Component },
  { path: 'menu7', component: Menu7Component },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
