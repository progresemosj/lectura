import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lobitos',
  templateUrl: './lobitos.component.html',
  styleUrls: ['./lobitos.component.css']
})
export class LobitosComponent {

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
    {word:'Cinco lobitos', starTime:17, endTime:21},
    {word:'Tiene la loba', starTime:21, endTime:23},
    {word:'Cinco lobitos', starTime:23, endTime:24},
    {word:'Detrás de la escoba', starTime:24, endTime:26},
    {word:'Cinco que tuvo', starTime:26, endTime:28},
    {word:'Cinco críó', starTime:28, endTime:30},
    {word:'Y a cinco lobitos', starTime:30, endTime:32},
    {word:'Lechita les dio', starTime:32, endTime:35},
    {word:'Cinco lobitos', starTime:42, endTime:44},
    {word:'Tiene la loba', starTime:44, endTime:47},
    {word:'Cinco lobitos', starTime:47, endTime:48},
    {word:'Detrás de la escoba', starTime:48, endTime:51},
    {word:'Cinco que tuvo', starTime:51, endTime:53},
    {word:'Cinco críó', starTime:53, endTime:55},
    {word:'Y a cinco lobitos', starTime:55, endTime:56},
    {word:'Lechita les dio', starTime:56, endTime:58},
    {word:'Cinco lobitos', starTime:74, endTime:76},
    {word:'Tiene la loba', starTime:76, endTime:78},
    {word:'Cinco lobitos', starTime:78, endTime:80},
    {word:'Detrás de la escoba', starTime:80, endTime:83},
    {word:'Cinco que tuvo', starTime:83, endTime:84},
    {word:'Cinco críó', starTime:84, endTime:86},
    {word:'Y a cinco lobitos', starTime:86, endTime:89},
    {word:'Lechita les dio', starTime:89, endTime:91},


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
