import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  ngOnInit(): void {
    this.cargarCanciones(this.canciones[0].id);

  }

  constructor(private router: Router) { }

  canciones = [
    { id: 1, nombre: "La Gallina Turuleca", imagen: 'assets/images/gallina.jpg', seleccionado: false },
    { id: 2, nombre: "La Vaca Lola", imagen: 'assets/images/vaca.jpg', seleccionado: false },
    { id: 3, nombre: "El Patito Juan", imagen: 'assets/images/pato.jpg', seleccionado: false },
    { id: 4, nombre: "Los Pollitos Dicen", imagen: 'assets/images/pollitos.jpg', seleccionado: false },
    { id: 5, nombre: "Cinco Lobitos", imagen: 'assets/images/lobos.jpg', seleccionado: false },
    { id: 6, nombre: "El Barquito Chiquitito", imagen: 'assets/images/barquito.jpg', seleccionado: false },
    { id: 7, nombre: "Arroz con Leche", imagen: 'assets/images/arroz.jpg', seleccionado: false },
    { id: 8, nombre: "La Araña Chiquitita", imagen: 'assets/images/aranita.jpg', seleccionado: false },
    { id: 9, nombre: "El Burrio Sabanero", imagen: 'assets/images/burrito.jpg', seleccionado: false },
  ]


  cargarCanciones(id: number) {

    this.canciones.forEach(cancion => cancion.seleccionado = false);
    const cancionSseleccionada = this.canciones.find(cancion => cancion.id === id);

    if (cancionSseleccionada) {
      cancionSseleccionada.seleccionado = true;
    }
    this.router.navigate(['/canciones/principal', id]);
  }
}
