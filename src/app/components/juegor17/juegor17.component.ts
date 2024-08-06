import { Component } from '@angular/core';

@Component({
  selector: 'app-juegor17',
  templateUrl: './juegor17.component.html',
  styleUrls: ['./juegor17.component.css']
})
export class Juegor17Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
