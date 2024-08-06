import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './menu7.component.html',
  styleUrls: ['./menu7.component.css']
})
export class Menu7Component {
  itemsf = [
    { image: 'assets/images/director2.png', text: "Ha nacido una estrella", link: '/juegomu25' },
    { image: 'assets/images/notas.png', text: "Las notas musicales", link: '/juegomu26' },
    { image: 'assets/images/instrumento.png', text: "¿Qué instrumento suena?", link: '/juegomu27' },
    { image: 'assets/images/notas1.png', text: "Atrapa las notas", link: '/juegomu28' },

  ];
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },

    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
  ];

}
