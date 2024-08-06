import { Component } from '@angular/core';

@Component({
  selector: 'app-juegol6',
  templateUrl: './juegol6.component.html',
  styleUrls: ['./juegol6.component.css']
})
export class Juegol6Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
