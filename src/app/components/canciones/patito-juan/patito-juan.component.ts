import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-patito-juan',
  templateUrl: './patito-juan.component.html',
  styleUrls: ['./patito-juan.component.css']
})
export class PatitoJuanComponent {

  @ViewChild('audioPlayer')audioPlayer!: ElementRef;
  gifVisible = false;


  ngOnInit(): void {
  window.scroll(0,0);
  }

  ngAfterViewInit(){
    this.audioPlayer.nativeElement.onplay = () => this.handlePlay();
    this.audioPlayer.nativeElement.onpause = () => this.handlePause();
  }

  handlePlay(){
    this.gifVisible = true;
  }

  handlePause(){
    this.gifVisible = false;
  }

  audioText: {word: string, starTime:number, endTime:number}[] = [
    {word:'Encontré al patito Juan', starTime:17, endTime:21},
    {word:'En la esquina del saguán', starTime:21, endTime:25},
    {word:'Y me dijo ven que vamos a charlar', starTime:34, endTime:37},
    {word:'Un consejo sano yo te voy a dar', starTime:37, endTime:41},
    {word:'Obedece a tu papá', starTime:49, endTime:51},
    {word:'Obedece a tu mamá', starTime:51, endTime:56},
    {word:'Y si lo haces es Señor,', starTime:56, endTime:58},
    {word:'Larga vida te dará', starTime:58, endTime:61},
    {word:'Cada día al despertar', starTime:78, endTime:80},
    {word:'A Jesús debes orar', starTime:80, endTime:84},
    {word:'Y también tu Biblia tienes que leer', starTime:93, endTime:95},
    {word:'Porque así un niño bueno vas a ser', starTime:95, endTime:99},
    {word:'Obedece a tu papá', starTime:107, endTime:110},
    {word:'Obedece a tu mamá', starTime:110, endTime:113},
    {word:'Y si lo haces es Señor,', starTime:113, endTime:117},
    {word:'Larga vida te dará', starTime:117, endTime:120},
    {word:'Encontré al patito Juan', starTime:150, endTime:153},
    {word:'En la esquina del saguán', starTime:153, endTime:157},
    {word:'Y me dijo ven que vamos a charlar', starTime:165, endTime:169},
    {word:'Un consejo sano yo te voy a dar', starTime:169, endTime:173},
    {word:'Obedece a tu papá', starTime:180, endTime:183},
    {word:'Obedece a tu mamá', starTime:183, endTime:187},
    {word:'Y si lo haces es Señor,', starTime:187, endTime:191},
    {word:'Larga vida te dará', starTime:191, endTime:195},
  ]

  currentWordIndex: number = -1;
  highlightWord(audioPlayer: HTMLAudioElement){
    const currentTime = audioPlayer.currentTime;
    for (let i = 0; i < this.audioText.length; i++) {
      if(currentTime >= this.audioText[i].starTime && currentTime <= this.audioText[i].endTime){
        this.currentWordIndex = i;
        break;
      }

    }
  }

  items = [
    {image: 'assets/images/cuento.svg', text:"Cuentos", link:'/cuentos'},
    {image: 'assets/images/fabula.svg', text:"Fábulas", link:'/fabulas'},
    {image: 'assets/images/juegos.svg', text:"Juegos", link:'/juegos'},
  ]

}
