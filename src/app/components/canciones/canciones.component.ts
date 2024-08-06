import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  gifVisible = false;

  ngOnInit(): void {
  window.scroll(0,0);
  }

  constructor() {}

  ngAfterViewInit() {
    this.audioPlayer.nativeElement.onplay = () => this.handlePlay();
    this.audioPlayer.nativeElement.onpause = () => this.handlePause();
  }

  handlePlay() {
    this.gifVisible = true;
  }

  handlePause() {
    this.gifVisible = false;
  }
  audioText: { word: string, startTime: number, endTime: number }[] = [
    { word: 'Yo conozco una vecina', startTime: 16, endTime: 18 },
    { word: 'que ha comprado una gallina', startTime: 18, endTime: 21 },
    { word: 'me parece una sardina enlatada', startTime: 21, endTime: 23 },
    { word: 'Tiene las patas de alambre', startTime: 23, endTime: 25 },
    { word: 'porque pasa mucho hambre', startTime: 25, endTime: 27 },
    { word: 'y la pobre está todita desplumada.', startTime: 27, endTime: 30 },
    { word: 'Pone huevos en la sala', startTime: 30, endTime: 33 },
    { word: 'y también en la cocina', startTime: 33, endTime: 35 },
    { word: 'pero nunca los pone en el corral.', startTime: 35, endTime: 37 },
    { word: '¡¡La Gallina!! ¡¡Turuleca!!', startTime: 37, endTime: 41 },
    { word: 'es un caso singular.', startTime: 41, endTime: 45 },
    { word: '¡¡La Gallina!! ¡¡Turuleca!!', startTime: 45, endTime: 49 },
    { word: 'está loca de verdad.', startTime: 49, endTime: 52 },
    { word: 'La Gallina Turuleca', startTime: 52, endTime: 56 },
    { word: 'ha puesto un huevo, ha puesto dos, ha puesto tres.', startTime: 56, endTime: 60 },
    { word: 'La Gallina Turuleca', startTime: 60, endTime: 64 },
    { word: 'ha puesto cuatro, ha puesto cinco, ha puesto seis.', startTime: 64, endTime: 67 },
    { word: 'La Gallina Turuleca', startTime: 67, endTime: 71 },
    { word: 'ha puesto siete, ha puesto ocho, ha puesto nueve.', startTime: 71, endTime: 75 },
    { word: '¿Dónde está esa gallinita?', startTime: 75, endTime: 78 },
    { word: 'déjala a la pobrecita, déjala que ponga diez.X2', startTime: 78, endTime: 82 },
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
