import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoc10',
  templateUrl: './juegoc10.component.html',
  styleUrls: ['./juegoc10.component.css']
})
export class Juegoc10Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
