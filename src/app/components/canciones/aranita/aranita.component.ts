import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aranita',
  templateUrl: './aranita.component.html',
  styleUrls: ['./aranita.component.css']
})
export class AranitaComponent {

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
    { word: 'La araña chiquitita', starTime: 0, endTime: 4 },
    { word: 'trepó por el balcón', starTime: 4, endTime: 7 },
    { word: 'Vino la lluvia', starTime: 7, endTime: 10 },
    { word: 'y al suelo la tiró.', starTime: 10, endTime: 12 },
    { word: 'El sol salió', starTime: 12, endTime: 14 },
    { word: 'y el agua se secó,', starTime: 14, endTime: 16 },
    { word: 'y la araña chiquitita', starTime: 16, endTime: 19 },
    { word: 'De nuevo se trepó', starTime: 19, endTime: 22 },
    { word: 'La araña grandota', starTime: 22, endTime: 30 },
    { word: 'trepó por el balcón', starTime: 30, endTime: 32 },
    { word: 'Vino la lluvia', starTime: 32, endTime: 34 },
    { word: 'y al suelo la tiró.', starTime: 34, endTime: 37 },
    { word: 'El sol salió', starTime: 37, endTime: 39 },
    { word: 'y el agua se secó,', starTime: 39, endTime: 41 },
    { word: 'y la araña grandota', starTime: 41, endTime: 45 },
    { word: 'De nuevo se trepó', starTime: 45, endTime: 47 },
    { word: 'La araña con hipo', starTime: 47, endTime: 55 },
    { word: 'trepó por el balcón', starTime: 55, endTime: 58 },
    { word: 'Vino la lluvia', starTime: 58, endTime: 61 },
    { word: 'y al suelo la tiró.', starTime: 61, endTime: 65 },
    { word: 'El sol salió', starTime: 65, endTime: 67 },
    { word: 'y el agua se secó,', starTime: 67, endTime: 69 },
    { word: 'y la araña con hipo', starTime: 69, endTime: 72 },
    { word: 'De nuevo se trepó', starTime: 72, endTime: 75 },



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
