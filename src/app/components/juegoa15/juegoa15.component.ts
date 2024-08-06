import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoa15',
  templateUrl: './juegoa15.component.html',
  styleUrls: ['./juegoa15.component.css']
})
export class Juegoa15Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
