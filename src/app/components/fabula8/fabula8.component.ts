import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fabula8',
  templateUrl: './fabula8.component.html',
  styleUrls: ['./fabula8.component.css']
})
export class Fabula8Component {
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
