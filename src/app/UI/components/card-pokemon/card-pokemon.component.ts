import { CommonTools } from './../../../Infraestruture/tools/common.tools';
import { IPokemonInfo } from 'src/app/DOMAIN/interface/api';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemonData!: IPokemonInfo;

  constructor(private router: Router, public tools: CommonTools) {}

  ngOnInit(): void {
    console.log('init');
  }

  pokemonDetails(id: number): void {
    this.router.navigate(['/pokemon-details', id]);
  }
}
