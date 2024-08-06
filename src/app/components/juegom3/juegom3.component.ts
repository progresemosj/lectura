import { Component } from '@angular/core';

@Component({
  selector: 'app-juego3',
  templateUrl: './juegom3.component.html',
  styleUrls: ['./juegom3.component.css']
})
export class Juegom3Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
