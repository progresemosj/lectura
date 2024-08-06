import { Component } from '@angular/core';

@Component({
  selector: 'app-juegol6',
  templateUrl: './juegol7.component.html',
  styleUrls: ['./juegol7.component.css']
})
export class Juegol7Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
