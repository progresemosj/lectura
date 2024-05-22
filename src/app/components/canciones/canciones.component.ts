import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent {
  @ViewChild('audioPlayer') audioPlayer: any;
  audioText: { word: string, startTime: number, endTime: number }[] = [
    { word: 'Yo conozco', startTime: 16, endTime: 17 },
    { word: 'una vecina', startTime: 17, endTime: 18 },
    // Agrega más palabras con sus tiempos de inicio y finalización
  ];
  currentWordIndex: number = -1;

  highlightWord(audioPlayer: HTMLAudioElement) {
    const currentTime = audioPlayer.currentTime;

    // Busca la palabra actual basada en el tiempo actual de reproducción del audio
    for (let i = 0; i < this.audioText.length; i++) {
      if (currentTime >= this.audioText[i].startTime && currentTime <= this.audioText[i].endTime) {
        this.currentWordIndex = i;
        break;
      }
    }
  }

  items = [

    // {image: '../../../assets/images/song.svg', text:"Música", link:'/canciones'},
    {image: 'assets/images/cuento.svg', text:"Cuentos", link:'/cuentos'},
    {image: 'assets/images/fabula.svg', text:"Fábulas", link:'/fabulas'},
    {image: 'assets/images/juegos.svg', text:"Juegos", link:'/juegos'},
  ];
}
