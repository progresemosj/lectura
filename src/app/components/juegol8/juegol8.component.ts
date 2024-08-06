import { Component } from '@angular/core';

@Component({
  selector: 'app-juegol6',
  templateUrl: './juegol8.component.html',
  styleUrls: ['./juegol8.component.css']
})
export class Juegol8Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
