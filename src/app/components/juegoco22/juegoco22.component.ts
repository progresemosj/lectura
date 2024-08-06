import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoco22',
  templateUrl: './juegoco22.component.html',
  styleUrls: ['./juegoco22.component.css']
})
export class Juegoco22Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
