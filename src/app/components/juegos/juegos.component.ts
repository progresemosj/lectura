import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {

  itemsf = [
    { image: 'assets/images/matematica.png', text: "Matematicas", link: '/menu1' },
    { image: 'assets/images/lenguaje.png', text: "Lenguaje", link: '/menu2' },
    { image: 'assets/images/ciencia1.png', text: "Ciencias", link: '/menu3' },
    { image: 'assets/images/arte1.png', text: "Arte", link: '/menu4' },
    { image: 'assets/images/religion.png', text: "Religion", link: '/menu5' },
    { image: 'assets/images/computo.png', text: "Computacion", link: '/menu6' },
    { image: 'assets/images/musica.png', text: "Musica", link: '/menu7' },
  ];
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    // {image: '../../../assets/images/fabula.svg', text:"Fábulas", link:'/fabulas'},
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
  ];
}
