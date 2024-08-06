import { Component } from '@angular/core';

@Component({
  selector: 'app-juegoc12',
  templateUrl: './juegoc12.component.html',
  styleUrls: ['./juegoc12.component.css']
})
export class Juegoc12Component {
  otherItems = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    // Agrega más elementos según sea necesario
  ];
}
