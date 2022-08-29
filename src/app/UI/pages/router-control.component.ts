import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { readAllPokemon } from 'src/app/Infraestruture/store/pokemons/pokemons.actions';

@Component({
  selector: 'app-router-control',
  templateUrl: './router-control.component.html',
  styleUrls: ['./router-control.component.scss']
})
export class RouterControlComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(readAllPokemon());
  }
}
