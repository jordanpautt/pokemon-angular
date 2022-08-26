import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';

@NgModule({
  declarations: [HeaderComponent, CardPokemonComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, CardPokemonComponent]
})
export class ComponentModule {}
