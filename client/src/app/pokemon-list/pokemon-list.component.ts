import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon-card/pokemon';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemons: any[] =[];
  pokemon: Pokemon;
  public pokemonName: string;
  getPokemonSub: Subscription;
  public filteredPokemons: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPokemon();

  }

  ngOnDestroy(): void {
    this.unsub();
  }
  public updateFilter(){
    this.filteredPokemons = this.dataService.filterPokemon( this.pokemons, {name: this.pokemonName});
  }
  getPokemon(){
    this.dataService.getPokemon()
    .subscribe((response: any) => {
      response.results.forEach(result=>{
        this.dataService.getPokemonDetails(result.name)
        .subscribe((detailResponse: any) =>
        this.pokemons.push(detailResponse));
        this.updateFilter();
      });
    });

  }
  unsub(): void {
    if (this.getPokemonSub) {
      this.getPokemonSub.unsubscribe();
    }
  }

}
