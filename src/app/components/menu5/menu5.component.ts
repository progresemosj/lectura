import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './menu5.component.html',
  styleUrls: ['./menu5.component.css']
})
export class Menu5Component {
  itemsf = [
    { image: 'assets/images/virgen.png', text: "La vida de la Virgen María", link: '/juegor17' },
    { image: 'assets/images/jesus.png', text: "Cuando Jesús era niño", link: '/juegor18' },
    { image: 'assets/images/jesus2.png', text: "Caminamos con Jesús", link: '/juegor19' },
    { image: 'assets/images/naturaleza.png', text: "Dios crea la naturaleza", link: '/juegor20' },

  ];
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },

    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
  ];

}
