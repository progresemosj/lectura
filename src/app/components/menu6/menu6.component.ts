import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './menu6.component.html',
  styleUrls: ['./menu6.component.css']
})
export class Menu6Component {
  itemsf = [
    { image: 'assets/images/mecanografia.png', text: "Teclea la palabra", link: '/juegoco21' },
    { image: 'assets/images/programar.png', text: "Programamos el camino", link: '/juegoco22' },
    { image: 'assets/images/barco.png', text: "Barco de papel", link: '/juegoco23' },
    { image: 'assets/images/seguridad.png', text: "Cyber-five", link: '/juegoco24' },

  ];
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },

    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
  ];

}
