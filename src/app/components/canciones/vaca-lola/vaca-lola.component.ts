import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vaca-lola',
  templateUrl: './vaca-lola.component.html',
  styleUrls: ['./vaca-lola.component.css']
})
export class VacaLolaComponent {


@ViewChild('audioPlayer')audioPlayer!: ElementRef;
gifVisible = false;

ngOnInit(): void {
  window.scroll(0,0);
}

ngAfterViewInit(){
  this.audioPlayer.nativeElement.onplay =() => this.handlePlay();
  this.audioPlayer.nativeElement.onpause = () => this.handlePause();
}


handlePlay(){
  this.gifVisible = true;
}

handlePause(){
  this.gifVisible = false;
}

audioText: { word: string, startTime:number, endTime: number}[] = [
  {word:'La Vaca Lola, la Vaca Lola', startTime:27 ,endTime: 30},
  {word:'tiene cabeza y tiene cola', startTime:30 ,endTime: 32},
  {word:'La Vaca Lola, la Vaca Lola', startTime:32 ,endTime: 35},
  {word:'tiene cabeza y tiene cola', startTime:35 ,endTime: 39},
  {word:'y hace ¡Muuu!', startTime:39 ,endTime: 41},

  {word:'La Vaca Lola, la Vaca Lola', startTime:41 ,endTime: 44},
  {word:'tiene cabeza y tiene cola', startTime:44 ,endTime: 47},
  {word:'La Vaca Lola, la Vaca Lola', startTime:47 ,endTime: 50},
  {word:'tiene cabeza y tiene cola', startTime:50 ,endTime: 53},
  {word:'y hace ¡Muuu!', startTime:53 ,endTime: 55},

  {word:'La Vaca Lola, la Vaca Lola', startTime:80 ,endTime: 83},
  {word:'tiene cabeza y tiene cola', startTime:83 ,endTime: 86},
  {word:'La Vaca Lola, la Vaca Lola', startTime:86 ,endTime: 90},
  {word:'tiene cabeza y tiene cola', startTime:90 ,endTime: 93},
  {word:'y hace ¡Muuu!', startTime:93 ,endTime: 95},

  {word:'La Vaca Lola, la Vaca Lola', startTime:95 ,endTime: 98},
  {word:'tiene cabeza y tiene cola', startTime:98 ,endTime: 101},
  {word:'La Vaca Lola, la Vaca Lola', startTime:101 ,endTime: 104},
  {word:'tiene cabeza y tiene cola', startTime:104 ,endTime: 107},
  {word:'y hace ¡Muuu!', startTime:107 ,endTime: 110},
];
currentWordIndex: number = -1;


highlightWord(audioPlayer: HTMLAudioElement){
  const currentTime = audioPlayer.currentTime;

  for(let i = 0; i< this.audioText.length; i++){
    if(currentTime >= this.audioText[i].startTime && currentTime <= this.audioText[i].endTime){
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




// La Vaca Lola, la Vaca Lola
// tiene cabeza y tiene cola.
// La Vaca Lola, la Vaca Lola
// tiene cabeza y tiene cola
// y hace ¡Muuu!

// La Vaca Lola, la Vaca Lola
// tiene cabeza y tiene cola.
// La Vaca Lola, la Vaca Lola
// tiene cabeza y tiene cola
// y hace ¡Muuu!

// La Vaca Lola, la Vaca Lola
// tiene cabeza y tiene cola.
// La Vaca Lola, la Vaca Lola
// tiene cabeza y tiene cola
// y hace ¡Muuu!

}
