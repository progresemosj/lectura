import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoa16',
  templateUrl: './juegoco241.component.html',
  styleUrls: ['./juegoco241.component.css']
})
export class Juegoco241Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
