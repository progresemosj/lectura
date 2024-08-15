import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fabula11',
  templateUrl: './fabula11.component.html',
  styleUrls: ['./fabula11.component.css']
})
export class Fabula11Component {
  ngOnInit(): void {
    window.scroll(0, 0);
  }
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    // {image: '../../../assets/images/fabula.svg', text:"Fábulas", link:'/fabulas'},
    { image: 'assets/images/juegos.svg', text: "Juegos", link: '/juegos' },
  ];
}
