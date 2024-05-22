import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  selectedIndex = 0;
  indicators = true;
  autoSlide = true;
  slideInterval = 3000;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }

  }

  images =[
    {
      image:
      'assets/images/canciones.jpg',
      // '../../../../../../assets/images/canciones.jpg',
      imageAlt:'canciones',

    },
    {
      image:
      'assets/images/cuentos.jpg',
      imageAlt:'cuentos',

    },
    {
      image:
      'assets/images/fabulas.jpg',
      imageAlt:'fabulas',

    },
    {
      image:
      'assets/images/juegos.jpg',
      imageAlt:'juegos',

    },
  ]

  selectImage(index: number):void{
    this.selectedIndex =  index;
  }

  autoSlideImages(): void{
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval)
  }

  onNextClick():void{
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}
