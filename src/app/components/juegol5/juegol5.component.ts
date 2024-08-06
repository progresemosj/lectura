import { Component } from '@angular/core';

@Component({
  selector: 'app-juegol5',
  templateUrl: './juegol5.component.html',
  styleUrls: ['./juegol5.component.css']
})
export class Juegol5Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
