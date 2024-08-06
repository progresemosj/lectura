import { Component } from '@angular/core';

@Component({
  selector: 'app-juegomu27',
  templateUrl: './juegomu27.component.html',
  styleUrls: ['./juegomu27.component.css']
})
export class Juegomu27Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
