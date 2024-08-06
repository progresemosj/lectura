import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component {
  itemsf = [
    { image: 'assets/images/carnivoros.jpg', text: "Animales Carnivoros", link: '/juegoc9' },
    { image: 'assets/images/bosques.jpg', text: "Animales del bosque", link: '/juegoc10' },
    { image: 'assets/images/alimentos.jpg', text: "Los alimentos", link: '/juegoc11' },
    { image: 'assets/images/domesticos.jpg', text: "Salvajes y domésticos", link: '/juegoc12' },
    { image: 'assets/images/transporte.png', text: "Medios de transporte", link: '/juegoc121' },

  ];
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
  ];

}
