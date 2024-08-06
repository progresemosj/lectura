import { Component } from '@angular/core';

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.component.html',
  styleUrls: ['./cuentos.component.css']
})
export class CuentosComponent {
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    // {image: '../../../assets/images/cuento.svg', text:"Cuentos", link:'/cuentos'},
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    { image: 'assets/images/juegos.svg', text: "Juegos", link: '/juegos' },
  ];
}
