import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component {
  itemsf = [
    { image: 'assets/images/dibujar.jpg', text: "Aprendo a dibujar", link: '/juegoa13' },
    { image: 'assets/images/pintar2.jpg', text: "Paint", link: '/juegoa14' },
    { image: 'assets/images/copia.jpg', text: "Copia el dibujo", link: '/juegoa15' },
    { image: 'assets/images/pintar.jpg', text: "Coloring game", link: '/juegoa16' },

  ];
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },

    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
  ];

}
