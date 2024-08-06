import { Component } from '@angular/core';

@Component({
  selector: 'app-juegol81',
  templateUrl: './juegol81.component.html',
  styleUrls: ['./juegol81.component.css']
})
export class Juegol81Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
