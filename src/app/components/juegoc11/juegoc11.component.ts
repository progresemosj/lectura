import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoc11',
  templateUrl: './juegoc11.component.html',
  styleUrls: ['./juegoc11.component.css']
})
export class Juegoc11Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
