import { IPokemonInfo } from 'src/app/DOMAIN/interface/api';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemonData!: IPokemonInfo;

  colorType: { [key: string]: string } = {
    grass: '#99FF66',
    poison: '#CC88BB',
    fire: '#FF7F00',
    water: '#B0E2FF ',
    flying: '#BAAAFF',
    bug: '#99CC33',
    normal: '#DDCCAA',
    electric: '#FFD700',
    ground: '#DEB887',
    rock: '#CD853F',
    psychic: '#FFB5C5'
  };
  constructor() {}

  ngOnInit(): void {}

  getColorType(type: string): string {
    return this.colorType[type];
  }
}
