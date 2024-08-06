import { Component } from '@angular/core';

@Component({
  selector: 'app-juegor20',
  templateUrl: './juegor20.component.html',
  styleUrls: ['./juegor20.component.css']
})
export class Juegor20Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
