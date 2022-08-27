import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonTools {
  colorType: { [key: string]: string } = {
    bug: '#99CC33',
    dark: '#A9A9A9',
    dragon: '#AB82FF',
    electric: '#FFD700',
    fairy: '#FFB0FF',
    fighting: '#FF6A6A',
    fire: '#FF7F00',
    flying: '#BAAAFF',
    ghost: '#778899',
    grass: '#99FF66',
    ground: '#DEB887',
    ice: '#ADD8E6',
    normal: '#DDCCAA',
    poison: '#CC88BB',
    psychic: '#FFB5C5',
    rock: '#CD853F',
    steel: '#CCCCCC',
    water: '#B0E2FF'
  };

  getColorType(type: string): string {
    return this.colorType[type];
  }
}
