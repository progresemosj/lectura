import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component {
  itemsf = [
    { image: 'assets/images/colores.png', text: "Aventura de Colores", link: '/juegol5' },
    { image: 'assets/images/vocales.png', text: "Vocales perdidas", link: '/juegol6' },
    { image: 'assets/images/letras.png', text: "Lectoescritura", link: '/juegol7' },
    { image: 'assets/images/emparejar.png', text: "Arrastra y coloca", link: '/juegol8' },
    { image: 'assets/images/silaba.png', text: "Caza la sílaba", link: '/juegol81' },

  ];
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    // {image: '../../../assets/images/fabula.svg', text:"Fábulas", link:'/fabulas'},
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
  ];

}
