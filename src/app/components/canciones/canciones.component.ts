import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent {



  items = [

    // {image: '../../../assets/images/song.svg', text:"Música", link:'/canciones'},
    {image: '../../../assets/images/cuento.svg', text:"Cuentos", link:'/cuentos'},
    {image: '../../../assets/images/fabula.svg', text:"Fábulas", link:'/fabulas'},
    {image: '../../../assets/images/juegos.svg', text:"Juegos", link:'/juegos'},
  ];
}
