import { CommonTools } from './../../../Infraestruture/tools/common.tools';
import { IPokemonInfo } from './../../../DOMAIN/interface/api/pokemon.interface';
import { PokemonService } from './../../../Infraestruture/services/pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonData: IPokemonInfo = {
    id: 0,
    img: '',
    abilities: [],
    types: [],
    name: '',
    height: 0,
    weight: 0
  };

  constructor(
    private routeActive: ActivatedRoute,
    private servicePokemon: PokemonService,
    public tool: CommonTools
  ) {}

  ngOnInit(): void {
    this.routeActive.params.subscribe(({ id }) => {
      this.servicePokemon.readOnePokemon(id).subscribe((data) => {
        this.pokemonData = data;
      });
    });
  }
}
