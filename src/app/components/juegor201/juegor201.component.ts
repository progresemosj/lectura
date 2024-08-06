import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoa16',
  templateUrl: './juegor201.component.html',
  styleUrls: ['./juegor201.component.css']
})
export class Juegor201Component {
  otherItems = [



    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
