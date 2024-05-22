import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { CuentosComponent } from './components/cuentos/cuentos.component';
import { FabulasComponent } from './components/fabulas/fabulas.component';
import { JuegosComponent } from './components/juegos/juegos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'canciones', component: CancionesComponent},
  {path: 'cuentos', component: CuentosComponent},
  {path: 'fabulas', component: FabulasComponent},
  {path: 'juegos', component: JuegosComponent},
  {path: '**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
