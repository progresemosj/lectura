import { Component } from '@angular/core';

@Component({
  selector: 'app-juegom2',
  templateUrl: './juegom2.component.html',
  styleUrls: ['./juegom2.component.css']
})
export class Juegom2Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
