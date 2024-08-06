import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoc121',
  templateUrl: './juegoc121.component.html',
  styleUrls: ['./juegoc121.component.css']
})
export class Juegoc121Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
