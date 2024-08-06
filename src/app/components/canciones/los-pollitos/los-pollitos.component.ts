import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-los-pollitos',
  templateUrl: './los-pollitos.component.html',
  styleUrls: ['./los-pollitos.component.css']
})
export class LosPollitosComponent {

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
    {word:'Los pollitos dicen', starTime:9, endTime:12},
    {word:'pío, pío, pío', starTime:12, endTime:13},
    {word:'cuando tienen hambre', starTime:14, endTime:17},
    {word:'cuando tienen frío.', starTime:17, endTime:19},
    {word:'La gallina busca', starTime:19, endTime:21},
    {word:'el maíz y el trigo', starTime:21, endTime:23},
    {word:'les da la comida', starTime:23, endTime:25},
    {word:'y les presta abrigo.', starTime:25, endTime:28},
    {word:'Bajo sus dos alas', starTime:28, endTime:30},
    {word:'acurrucaditos', starTime:30, endTime:32},
    {word:'hasta el otro día', starTime:32, endTime:34},
    {word:'duermen los pollitos(biz).', starTime:34, endTime:37},
    {word:'Cuando se levantan', starTime:83, endTime:85},
    {word:'Dicen mamacita,', starTime:85, endTime:87},
    {word:'Tengo mucha hambre', starTime:87, endTime:89},
    {word:'Dame lombricitas.', starTime:89, endTime:93},

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
