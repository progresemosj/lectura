import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoa16',
  templateUrl: './juegoa161.component.html',
  styleUrls: ['./juegoa161.component.css']
})
export class Juegoa161Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
