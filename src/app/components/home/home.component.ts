import { Component } from '@angular/core';
import { ContadorService } from '../../../services/contador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  contador: number = 0;

  constructor(private contadorService: ContadorService) { }


  items = [

    // {image: '../../../assets/images/song.svg', text:"Canciones", link:'/canciones'},
    { image: 'assets/images/song.svg', text: "Canciones", link: '/canciones/principal' },
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    { image: 'assets/images/juegos.svg', text: "Juegos", link: '/juegos' },
  ]

  ngOnInit(): void {
    //  this.contadorService.aumentarContador();

  }
}
