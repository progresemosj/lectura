import { Component } from '@angular/core';

@Component({
  selector: 'app-juego4',
  templateUrl: './juegom4.component.html',
  styleUrls: ['./juegom4.component.css']
})
export class Juegom4Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
