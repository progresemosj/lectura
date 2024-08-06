import { Component } from '@angular/core';

@Component({
  selector: 'app-juegomu25',
  templateUrl: './juegomu25.component.html',
  styleUrls: ['./juegomu25.component.css']
})
export class Juegomu25Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
