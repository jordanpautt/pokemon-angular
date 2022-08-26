import { selectPokemonsState } from './../../../Infraestruture/store/pokemons/pokemons.selectors';
import { readAllPokemon } from './../../../Infraestruture/store/pokemons/pokemon.actions';
import { IPokemonInfo } from 'src/app/DOMAIN/interface/api';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PokemonService } from 'src/app/Infraestruture/services/pokemon/pokemon.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemonsList: IPokemonInfo[] = [];
  subcription!: Subscription;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.subcription = this.pokemonService
      .readAllPokemon()
      .subscribe((data) => {
        this.pokemonsList = data;
      });
    // this.store.dispatch(readAllPokemon());

    // this.store.pipe(select(selectPokemonsState)).subscribe((data) => {
    //   console.log(data);
    // });
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe();
  }
}
