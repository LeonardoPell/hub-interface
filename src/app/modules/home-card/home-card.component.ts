import { Component, OnInit } from '@angular/core';
import { ICardInfo } from 'src/app/core/interfaces/home-card.interface';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  public cardInfo: ICardInfo[] = [
    {
      title: 'Barbearias e cabeleireiros',
      about: 'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and',
      icon: 'disponivel.png',
      alt: 'disponivel'
    },
    {
      title: 'Roupas, brinquedos e produtos',
      about: 'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and',
      icon: 'indisponivel.png',
      alt: 'indisponivel'
    },
    {
      title: 'Comidas e produtos alimentícios',
      about: 'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and',
      icon: 'indisponivel.png',
      alt: 'indisponivel'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
