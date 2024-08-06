import { Component } from '@angular/core';

@Component({
  selector: 'app-juegor18',
  templateUrl: './juegor18.component.html',
  styleUrls: ['./juegor18.component.css']
})
export class Juegor18Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
