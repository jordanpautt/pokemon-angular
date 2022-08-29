import { selectPokemonsState } from './../../../Infraestruture/store/pokemons/pokemons.selectors';
import { readAllPokemon } from '../../../Infraestruture/store/pokemons/pokemons.actions';
import { IPokemonInfo } from 'src/app/DOMAIN/interface/api';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemonsList: IPokemonInfo[] = [];
  subcription!: Subscription;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.subcription = this.store
      .pipe(select(selectPokemonsState))
      .subscribe(({ pokemons }) => {
        this.pokemonsList = pokemons;
      });
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe();
  }
}
