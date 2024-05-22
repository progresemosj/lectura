import { Component } from '@angular/core';

@Component({
  selector: 'app-fabulas',
  templateUrl: './fabulas.component.html',
  styleUrls: ['./fabulas.component.css']
})
export class FabulasComponent {
  items = [

    {image: 'assets/images/song.svg', text:"Canciones", link:'/canciones'},
    {image: 'assets/images/cuento.svg', text:"Cuentos", link:'/cuentos'},
    // {image: '../../../assets/images/fabula.svg', text:"Fábulas", link:'/fabulas'},
    {image: 'assets/images/juegos.svg', text:"Juegos", link:'/juegos'},
  ];

}
