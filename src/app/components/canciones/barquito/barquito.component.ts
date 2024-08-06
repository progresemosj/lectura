import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barquito',
  templateUrl: './barquito.component.html',
  styleUrls: ['./barquito.component.css']
})
export class BarquitoComponent {

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
    {word:'Había una vez un barquito chiquitito', starTime:10, endTime:14},
    {word:'Había una vez un barquito chiquitito', starTime:14, endTime:17},
    {word:'Había una vez un barquito chiquitito', starTime:17, endTime:21},
    {word:'Que no podia, que no podía, que no podía navegar.', starTime:21, endTime:25},
    {word:'Pasaron una, dos, tres, cuatro, cinco, seis, siete semanas,', starTime:25, endTime:29},
    {word:'Pasaron una, dos, tres, cuatro, cinco, seis, siete semanas,', starTime:29, endTime:34},
    {word:'Pasaron una, dos, tres, cuatro, cinco, seis, siete semanas,', starTime:34, endTime:39},
    {word:'y el barquito, que no podía, que no podía navegar.', starTime:39, endTime:43},
    {word:'Y si esta historia no les parece larga,', starTime:43, endTime:47},
    {word:'Y si esta historia no les parece larga,', starTime:47, endTime:50},
    {word:'Y si esta historia no les parece larga,', starTime:50, endTime:54},
    {word:'La volveremos, la volveremos, la volveremos a empezar.', starTime:54, endTime:59},
    {word:'Había una vez un barquito chiquitito', starTime:65, endTime:69},
    {word:'Había una vez un barquito chiquitito', starTime:69, endTime:72},
    {word:'Había una vez un barquito chiquitito', starTime:72, endTime:76},
    {word:'Que no podia, que no podía, que no podía navegar.', starTime:76, endTime:81},
    {word:'Pasaron una, dos, tres, cuatro, cinco, seis, siete semanas,', starTime:81, endTime:85},
    {word:'Pasaron una, dos, tres, cuatro, cinco, seis, siete semanas,', starTime:85, endTime:90},
    {word:'Pasaron una, dos, tres, cuatro, cinco, seis, siete semanas,', starTime:90, endTime:95},
    {word:'y el barquito, que no podía, que no podía navegar.', starTime:95, endTime:99},
    {word:'Y si esta historia no les parece larga,', starTime:99, endTime:102},
    {word:'Y si esta historia no les parece larga,', starTime:102, endTime:106},
    {word:'Y si esta historia no les parece larga,', starTime:106, endTime:110},
    {word:'La volveremos, la volveremos, la volveremos a empezar.', starTime:110, endTime:120},

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
