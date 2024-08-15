import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fabula2',
  templateUrl: './fabula2.component.html',
  styleUrls: ['./fabula2.component.css']
})
export class Fabula2Component {
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
