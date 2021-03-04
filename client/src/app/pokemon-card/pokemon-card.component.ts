import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;


  constructor() { }

  ngOnInit(): void {
  }

  getType(pokemon) {
    return this.pokemon.types[0].type.name[0] + this.pokemon.types[0].type.name.substring(1);
  }

}
