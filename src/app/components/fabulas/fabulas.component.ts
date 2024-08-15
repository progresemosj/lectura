import { Component } from '@angular/core';

@Component({
  selector: 'app-fabulas',
  templateUrl: './fabulas.component.html',
  styleUrls: ['./fabulas.component.css']
})
export class FabulasComponent {
  searchTerm: string = '';
  itemsf = [
    { image: 'assets/images/fabula_1.jpg', text: "El león y ratón", link: '/fabula1' },
    { image: 'assets/images/fabula_2.jpeg', text: "El pastor mentiroso", link: '/fabula2' },
    { image: 'assets/images/fabula_3.jpg', text: "La liebre y la tortuga", link: '/fabula3' },
    { image: 'assets/images/fabula_4.jpg', text: "El lobo disfrazado", link: '/fabula4' },
    { image: 'assets/images/fabula_5.jpg', text: "El lobo y la grulla", link: '/fabula5' },
    { image: 'assets/images/fabula_6.jpg', text: "La zorra y las uvas", link: '/fabula6' },
    { image: 'assets/images/fabula_7.jpg', text: "El leñador honrado", link: '/fabula7' },
    { image: 'assets/images/fabula_8.png', text: "El zorro y el armiño", link: '/fabula8' },
    { image: 'assets/images/fabula_9.jpg', text: "El perro y su reflejo", link: '/fabula9' },
    { image: 'assets/images/fabula_10.jpg', text: "La lechera y su cantaro", link: '/fabula10' },
    { image: 'assets/images/fabula_11.jpg', text: "El aguila y los gallos", link: '/fabula11' },
    { image: 'assets/images/fabula_12.jpg', text: "El gallo y la joya", link: '/fabula12' },
  ];

  // Guarda una copia original de los elementos
  originalItemsf = [...this.itemsf];

  items = [
    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/juegos.svg', text: "Juegos", link: '/juegos' },
  ];

  onSearch() {
    if (this.searchTerm === '') {
      // Si la búsqueda está vacía, restaura todos los elementos
      this.itemsf = [...this.originalItemsf];
    } else {
      // Filtra los elementos según el término de búsqueda
      this.itemsf = this.originalItemsf.filter(item =>
        item.text.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
