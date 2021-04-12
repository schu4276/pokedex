import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { Pokemon } from '../pokemon-card/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  pokeUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemon(){
    return this.http.get(this.pokeUrl+`pokemon?limit=10`);
  }

  getPokemonDetails(name: string){
    return this.http.get(this.pokeUrl+`pokemon/${name}`);
  }

  getPokemonByName(name: string): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrl+'pokemon/'+name);
  }
  filterPokemon(pokemons: any[], filters: { name?: string; type?: string }): any[] {
    let filteredPokemons = pokemons;

    if(filters.name){
      filters.name = filters.name.toLowerCase();
      filteredPokemons = filteredPokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(filters.name)!== -1);
    }
    if(filters.type){
      if(filters.type !== 'All Types'){
      filters.type = filters.type.toLowerCase();
      filteredPokemons = filteredPokemons.filter(pokemon => pokemon.types[0].type.name.toLowerCase().indexOf(filters.type)!== -1);
      }
    }
    return filteredPokemons;
  }
  getItems(){
    return this.http.get('https://pokeapi.co/api/v2/item');
  }

}
