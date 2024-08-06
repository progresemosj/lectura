import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoa14',
  templateUrl: './juegoa14.component.html',
  styleUrls: ['./juegoa14.component.css']
})
export class Juegoa14Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
