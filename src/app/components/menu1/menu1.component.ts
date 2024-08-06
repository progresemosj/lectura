import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component {
  searchTerm: string = '';
  itemsf = [
    { image: 'assets/images/contando.png', text: "Cuenta con nosotros", link: '/juego1' },
    { image: 'assets/images/sumas.png', text: "Sumas y restas divertidas", link: '/juegom2' },
    { image: 'assets/images/figuras.png', text: "Explora Figuras", link: '/juegom3' },
    { image: 'assets/images/series.png', text: "Patrones Mágicos", link: '/juegom4' },
    { image: 'assets/images/multiplicar.png', text: "La máquina de multiplicar", link: '/juegom41' },

  ];
  items = [

    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    // {image: '../../../assets/images/fabula.svg', text:"Fábulas", link:'/fabulas'},
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
  ];
  onSearch() {
    this.itemsf = this.itemsf.filter(item =>
      item.text.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
