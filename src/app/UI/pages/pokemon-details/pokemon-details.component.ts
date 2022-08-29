import { selectPokemonState } from './../../../Infraestruture/store/pokemon/pokemon.selectors';
import { readOnePokemon } from './../../../Infraestruture/store/pokemon/pokemon.actions';
import { CommonTools } from './../../../Infraestruture/tools/common.tools';
import { IPokemonInfo } from './../../../DOMAIN/interface/api/pokemon.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectPokemonsState } from 'src/app/Infraestruture/store/pokemons/pokemons.selectors';

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
    private store: Store,
    public tool: CommonTools
  ) {}

  ngOnInit(): void {
    this.routeActive.params.subscribe(({ id }) => {
      this.store.dispatch(readOnePokemon({ id }));
      this.store.pipe(select(selectPokemonState)).subscribe(({ pokemon }) => {
        this.pokemonData = pokemon;
      });
    });
  }
}
