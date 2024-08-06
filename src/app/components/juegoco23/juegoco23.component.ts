import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoco23',
  templateUrl: './juegoco23.component.html',
  styleUrls: ['./juegoco23.component.css']
})
export class Juegoco23Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
