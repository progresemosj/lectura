import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoco24',
  templateUrl: './juegoco24.component.html',
  styleUrls: ['./juegoco24.component.css']
})
export class Juegoco24Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
