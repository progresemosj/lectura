import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fabula4',
  templateUrl: './fabula4.component.html',
  styleUrls: ['./fabula4.component.css']
})
export class Fabula4Component {
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
