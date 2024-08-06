import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arroz',
  templateUrl: './arroz.component.html',
  styleUrls: ['./arroz.component.css']
})
export class ArrozComponent {

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
    {word:'Arroz con leche', starTime:10, endTime:13},
    {word:'Me quiero casar', starTime:13, endTime:15},
    {word:'Con una señorita', starTime:15, endTime:18},
    {word:'De la capital', starTime:18, endTime:20},
    {word:'Que sepa coser', starTime:20, endTime:22},
    {word:'Que sepa bordar', starTime:22, endTime:24},
    {word:'Que sepa abrir la puerta', starTime:24, endTime:27},
    {word:'Para ir a jugar', starTime:27, endTime:29},
    {word:'Con esta sí', starTime:29, endTime:31},
    {word:'Con esta no', starTime:31, endTime:32},
    {word:'Con esta señorita', starTime:32, endTime:35},
    {word:'Me caso yo', starTime:35, endTime:37},
    {word:'Yo soy la viudita', starTime:47, endTime:49},
    {word:'Del barrio del Rey', starTime:49, endTime:51},
    {word:'Me quiero casar', starTime:51, endTime:53},
    {word:'Y no sé con quién', starTime:53, endTime:56},
    {word:'Con esta sí', starTime:56, endTime:58},
    {word:'Con esta no', starTime:58, endTime:60},
    {word:'Con esta señorita', starTime:60, endTime:63},
    {word:'Me caso yo', starTime:63, endTime:65},

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
