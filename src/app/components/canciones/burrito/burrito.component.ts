import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-burrito',
  templateUrl: './burrito.component.html',
  styleUrls: ['./burrito.component.css']
})
export class BurritoComponent {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  gifVisible = false;


  ngOnInit(): void {
    window.scroll(0, 0);
  }

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

  audioText: { word: string, starTime: number, endTime: number }[] = [
    { word: 'Con mi burrito sabanero, voy camino de Belén', starTime: 9, endTime: 13 },
    { word: 'Con mi burrito sabanero, voy camino de Belén', starTime: 13, endTime: 19 },
    { word: 'Si me ven, si me ven, voy camino de Belén', starTime: 19, endTime: 23 },
    { word: 'Si me ven, si me ven, voy camino de Belén', starTime: 23, endTime: 28 },
    { word: 'El lucerito mañanero ilumina mi sendero', starTime: 28, endTime: 32 },
    { word: 'El lucerito mañanero ilumina mi sendero', starTime: 32, endTime: 36 },
    { word: 'Si me ven, si me ven, voy camino de Belén', starTime: 36, endTime: 40 },
    { word: 'Si me ven, si me ven, voy camino de Belén', starTime: 40, endTime: 45 },
    { word: 'Con mi cuatrico, voy cantando, mi burrito va trotando', starTime: 45, endTime: 50 },
    { word: 'Con mi cuatrico, voy cantando, mi burrito va trotando', starTime: 50, endTime: 55 },
    { word: 'Si me ven, si me ven, voy camino de Belén', starTime: 55, endTime: 59 },
    { word: 'Si me ven, si me ven, voy camino de Belén', starTime: 59, endTime: 63 },
    { word: 'Tuki tuki tuki tuki, tuki tuki tuki ta', starTime: 63, endTime: 69 },
    { word: 'Apúrate, mi burrito, que ya vamos a llegar', starTime: 69, endTime: 74 },
    { word: 'Tuki tuki tuki tuki, tuki tuki tuki tu', starTime: 74, endTime: 77 },
    { word: 'Apúrate, mi burrito, vamos a ver a Jesús(biz)', starTime: 77, endTime: 82 },

  ]


  currentWordIndex: number = -1;
  highlightWord(audioPlayer: HTMLAudioElement) {
    const currentTime = audioPlayer.currentTime;
    for (let i = 0; i < this.audioText.length; i++) {
      if (currentTime >= this.audioText[i].starTime && currentTime <= this.audioText[i].endTime) {
        this.currentWordIndex = i;
        break;
      }

    }
  }
  items = [
    { image: 'assets/images/cuento.svg', text: "Cuentos", link: '/cuentos' },
    { image: 'assets/images/fabula.svg', text: "Fábulas", link: '/fabulas' },
    { image: 'assets/images/juegos.svg', text: "Juegos", link: '/juegos' },
  ]

}
