import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fabula5',
  templateUrl: './fabula5.component.html',
  styleUrls: ['./fabula5.component.css']
})
export class Fabula5Component{
    ngOnInit(): void {
        window.scroll(0,0);
        }
        items = [

            {image: 'assets/images/song.svg', text:"Canciones", link:'/canciones'},
            {image: 'assets/images/cuento.svg', text:"Cuentos", link:'/cuentos'},
            // {image: '../../../assets/images/fabula.svg', text:"Fábulas", link:'/fabulas'},
            {image: 'assets/images/juegos.svg', text:"Juegos", link:'/juegos'},
          ];
}